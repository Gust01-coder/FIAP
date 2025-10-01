import { useMemo } from "react";
import { Card } from "react-bootstrap";
import { USER_CONTACT_LIST } from "../../../constants/sessionKeys";

const LocationChart = () => {
  const locationData = useMemo(() => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    
    // Agrupar por localização
    const locations = {};
    data.forEach(contact => {
      const location = contact.localization || "Não informado";
      locations[location] = (locations[location] || 0) + 1;
    });

    // Converter para array e ordenar
    const sorted = Object.entries(locations)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Top 5

    const total = data.length || 1;
    const maxCount = Math.max(...sorted.map(l => l.count), 1);

    return sorted.map(item => ({
      ...item,
      percentage: ((item.count / total) * 100).toFixed(1),
      barWidth: (item.count / maxCount) * 100
    }));
  }, []);

  return (
    <Card className="border-0 shadow-sm h-100">
      <Card.Header className="bg-white border-0 p-4">
        <h5 className="fw-bold mb-1">Leads por Localidade</h5>
        <p className="text-muted small mb-0">Top 5 cidades/estados</p>
      </Card.Header>
      <Card.Body className="p-4">
        {locationData.length === 0 ? (
          <div className="text-center text-muted py-4">
            <i className="bi bi-geo-alt fs-1 d-block mb-2"></i>
            <p className="mb-0">Sem dados disponíveis</p>
          </div>
        ) : (
          <div className="location-chart">
            {locationData.map((item, index) => (
              <div key={index} className="chart-bar-item mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <div className="chart-index me-2">
                      {index + 1}
                    </div>
                    <span className="fw-semibold text-dark">{item.name}</span>
                  </div>
                  <div className="text-end">
                    <span className="fw-bold text-success me-2">{item.count}</span>
                    <span className="text-muted small">{item.percentage}%</span>
                  </div>
                </div>
                <div className="chart-bar-track">
                  <div 
                    className="chart-bar-fill"
                    style={{ width: `${item.barWidth}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default LocationChart;

