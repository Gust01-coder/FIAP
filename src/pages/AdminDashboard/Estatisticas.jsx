import { Container, Row, Col, Card } from "react-bootstrap";
import { useMemo } from "react";
import { USER_CONTACT_LIST } from "../../constants/sessionKeys";
import LocationChart from "./components/LocationChart";
import SubjectChart from "./components/SubjectChart";

const Estatisticas = () => {
  const analytics = useMemo(() => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    
    // Calcular estatísticas
    const today = new Date();
    const last7Days = [];
    const last30Days = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toDateString();
      const count = data.filter(
        msg => new Date(msg.date || Date.now()).toDateString() === dateStr
      ).length;
      last7Days.push({ date: dateStr, count });
    }
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toDateString();
      const count = data.filter(
        msg => new Date(msg.date || Date.now()).toDateString() === dateStr
      ).length;
      last30Days.push({ date: dateStr, count });
    }
    
    const avgResponseTime = data.length > 0 
      ? Math.round(data.filter(msg => msg.read).length / data.length * 100)
      : 0;
    
    return {
      total: data.length,
      last7Days: last7Days.reverse(),
      last30Days: last30Days.reverse(),
      avgResponseTime,
      readRate: data.length > 0 
        ? Math.round((data.filter(msg => msg.read).length / data.length) * 100)
        : 0,
    };
  }, []);

  return (
    <div className="admin-dashboard">
      <Container fluid className="px-4 py-4">
        <div className="mb-4">
          <h1 className="h3 fw-bold text-dark mb-2">Estatísticas e Analytics</h1>
          <p className="text-muted mb-0">Análise detalhada dos dados e métricas</p>
        </div>

        {/* Métricas Principais */}
        <Row className="g-3 mb-4">
          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">
                      Taxa de Leitura
                    </p>
                    <h2 className="h3 fw-bold mb-0 text-dark">
                      {analytics.readRate}%
                    </h2>
                  </div>
                  <div className="admin-icon-wrapper bg-success-subtle">
                    <i className="bi bi-eye-fill text-success fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">
                      Últimos 7 dias
                    </p>
                    <h2 className="h3 fw-bold mb-0 text-dark">
                      {analytics.last7Days.reduce((sum, day) => sum + day.count, 0)}
                    </h2>
                  </div>
                  <div className="admin-icon-wrapper bg-primary-subtle">
                    <i className="bi bi-calendar-week text-primary fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">
                      Últimos 30 dias
                    </p>
                    <h2 className="h3 fw-bold mb-0 text-dark">
                      {analytics.last30Days.reduce((sum, day) => sum + day.count, 0)}
                    </h2>
                  </div>
                  <div className="admin-icon-wrapper bg-info-subtle">
                    <i className="bi bi-calendar-month text-info fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">
                      Pico de Horário
                    </p>
                    <h2 className="h3 fw-bold mb-0 text-dark">
                      N/A
                    </h2>
                  </div>
                  <div className="admin-icon-wrapper bg-warning-subtle">
                    <i className="bi bi-clock-fill text-warning fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Gráficos */}
        <Row className="g-3 mb-4">
          <Col lg={6}>
            <LocationChart />
          </Col>
          <Col lg={6}>
            <SubjectChart />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Estatisticas;

