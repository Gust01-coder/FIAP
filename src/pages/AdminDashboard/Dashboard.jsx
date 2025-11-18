import { Container, Col, Row, Card } from "react-bootstrap";
import { useMemo } from "react";
import { USER_CONTACT_LIST } from "../../constants/sessionKeys";
import LocationChart from "./components/LocationChart";
import SubjectChart from "./components/SubjectChart";

const Dashboard = () => {
  const stats = useMemo(() => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    const today = new Date().toDateString();
    const todayMessages = data.filter(msg => new Date(msg.date || Date.now()).toDateString() === today);
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const yesterdayMessages = data.filter(msg => new Date(msg.date || Date.now()).toDateString() === yesterday);
    
    return {
      total: data.length,
      today: todayMessages.length,
      yesterday: yesterdayMessages.length,
      pending: data.filter(msg => !msg.read).length,
      read: data.filter(msg => msg.read).length,
      trend: todayMessages.length - yesterdayMessages.length
    };
  }, []);

  return (
    <div className="admin-dashboard">
      <Container fluid className="px-3 px-md-4 py-3 py-md-4">
        {/* Header */}
        <div className="mb-4">
          <h1 className="h3 fw-bold text-dark mb-2">Dashboard</h1>
          <p className="text-muted mb-0">Visão geral das métricas e estatísticas</p>
        </div>

        {/* Stats Cards */}
        <Row className="g-3 mb-4">
          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-3 p-md-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">Total de Mensagens</p>
                    <h2 className="h3 fw-bold mb-1 text-dark">{stats.total}</h2>
                    <p className="text-muted small mb-0">
                      <i className="bi bi-check-circle me-1"></i>
                      {stats.read} lidas
                    </p>
                  </div>
                  <div className="admin-icon-wrapper bg-primary-subtle flex-shrink-0">
                    <i className="bi bi-envelope-fill text-primary fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-3 p-md-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">Hoje</p>
                    <h2 className="h3 fw-bold mb-1 text-dark">{stats.today}</h2>
                    {stats.trend !== 0 && (
                      <p className="text-muted small mb-0">
                        <i className={`bi bi-arrow-${stats.trend > 0 ? 'up' : 'down'}-circle me-1 text-${stats.trend > 0 ? 'success' : 'danger'}`}></i>
                        {Math.abs(stats.trend)} {stats.trend > 0 ? 'mais' : 'menos'} que ontem
                      </p>
                    )}
                  </div>
                  <div className="admin-icon-wrapper bg-success-subtle flex-shrink-0">
                    <i className="bi bi-calendar-check-fill text-success fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-3 p-md-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">Não Lidas</p>
                    <h2 className="h3 fw-bold mb-1 text-dark">{stats.pending}</h2>
                    <p className="text-muted small mb-0">
                      {stats.total > 0 ? Math.round((stats.pending / stats.total) * 100) : 0}% do total
                    </p>
                  </div>
                  <div className="admin-icon-wrapper bg-warning-subtle flex-shrink-0">
                    <i className="bi bi-bell-fill text-warning fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className="border-0 shadow-sm admin-stat-card h-100">
              <Card.Body className="p-3 p-md-4">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <p className="text-muted small mb-2 text-uppercase fw-semibold">Taxa de Leitura</p>
                    <h2 className="h3 fw-bold mb-1 text-dark">
                      {stats.total > 0 ? Math.round((stats.read / stats.total) * 100) : 0}%
                    </h2>
                    <p className="text-muted small mb-0">
                      {stats.read} de {stats.total} mensagens
                    </p>
                  </div>
                  <div className="admin-icon-wrapper bg-info-subtle flex-shrink-0">
                    <i className="bi bi-eye-fill text-info fs-4"></i>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Charts Row */}
        <Row className="g-3">
          <Col xs={12} lg={6}>
            <LocationChart />
          </Col>
          <Col xs={12} lg={6}>
            <SubjectChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

