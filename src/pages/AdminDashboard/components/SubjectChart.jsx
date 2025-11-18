import { useMemo } from "react";
import { Card } from "react-bootstrap";
import { USER_CONTACT_LIST } from "../../../constants/sessionKeys";

const SubjectChart = () => {
  const subjectData = useMemo(() => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    
    const subjects = {
      'mapeamento': { label: 'Mapeamento', count: 0, color: '#0d6efd' },
      'logistica': { label: 'Logística', count: 0, color: '#0dcaf0' },
      'automacao': { label: 'Automação', count: 0, color: '#198754' },
      'demo': { label: 'Demo', count: 0, color: '#ffc107' },
      'parceria': { label: 'Parceria', count: 0, color: '#dc3545' },
      'outros': { label: 'Outros', count: 0, color: '#6c757d' }
    };

    data.forEach(contact => {
      const subject = contact.subject || 'outros';
      if (subjects[subject]) {
        subjects[subject].count++;
      }
    });

    const total = data.length || 1;
    
    return Object.entries(subjects)
      .map(([key, value]) => ({
        key,
        ...value,
        percentage: ((value.count / total) * 100).toFixed(1)
      }))
      .filter(item => item.count > 0)
      .sort((a, b) => b.count - a.count);
  }, []);

  const totalLeads = useMemo(() => {
    return subjectData.reduce((sum, item) => sum + item.count, 0);
  }, [subjectData]);

  return (
    <Card className="border-0 shadow-sm h-100 subject-donut-chart" style={{ 
      background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)'
    }}>
      <Card.Header className="bg-transparent border-0 p-4 pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h5 className="fw-bold mb-1 text-dark">Leads por Assunto</h5>
            <p className="text-muted small mb-0">Distribuição de interesses</p>
          </div>
          <div className="admin-icon-wrapper bg-success-subtle">
            <i className="bi bi-pie-chart-fill text-success fs-5"></i>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="p-4">
        {subjectData.length === 0 ? (
          <div className="text-center text-muted py-4">
            <i className="bi bi-pie-chart fs-1 d-block mb-2"></i>
            <p className="mb-0">Sem dados disponíveis</p>
          </div>
        ) : (
          <>
            {/* Donut Chart Visual */}
            <div className="subject-donut-chart mb-4">
              <div className="donut-container">
                <svg viewBox="0 0 200 200" className="donut-svg">
                  {(() => {
                    let currentAngle = 0;
                    return subjectData.map((item, index) => {
                      const percentage = parseFloat(item.percentage);
                      const angle = (percentage / 100) * 360;
                      const largeArcFlag = angle > 180 ? 1 : 0;
                      
                      const startX = 100 + 80 * Math.cos((currentAngle - 90) * Math.PI / 180);
                      const startY = 100 + 80 * Math.sin((currentAngle - 90) * Math.PI / 180);
                      const endX = 100 + 80 * Math.cos((currentAngle + angle - 90) * Math.PI / 180);
                      const endY = 100 + 80 * Math.sin((currentAngle + angle - 90) * Math.PI / 180);
                      
                      const path = `M 100 100 L ${startX} ${startY} A 80 80 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;
                      
                      currentAngle += angle;
                      
                      return (
                        <path
                          key={index}
                          d={path}
                          fill={item.color}
                          className="donut-segment"
                        />
                      );
                    });
                  })()}
                  <circle cx="100" cy="100" r="50" fill="white" />
                </svg>
                <div className="donut-center">
                  <div className="donut-total">{totalLeads}</div>
                  <div className="donut-label">Total</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="subject-legend">
              {subjectData.map((item, index) => (
                <div key={index} className="legend-item mb-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div 
                        className="legend-color me-2"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-dark">{item.label}</span>
                    </div>
                    <div className="text-end">
                      <span className="fw-bold text-dark me-2">{item.count}</span>
                      <span className="text-muted small">{item.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default SubjectChart;

