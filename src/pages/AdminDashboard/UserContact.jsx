import { Container, Col, Row, Card } from "react-bootstrap";
import { useState, useMemo } from "react";
import UserContactTable from "./UserContactTable";
import SlideOverPanel from "../../components/layout/SlideOverPanel/SlideOverPanel";
import { USER_CONTACT_LIST } from "../../constants/sessionKeys";
import LocationChart from "./components/LocationChart";
import SubjectChart from "./components/SubjectChart";

const UserContact = () => {
  const [selectedUserContact, setSelectedUserContact] = useState(null);
  
  const stats = useMemo(() => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    const today = new Date().toDateString();
    const todayMessages = data.filter(msg => new Date(msg.date || Date.now()).toDateString() === today);
    
    return {
      total: data.length,
      today: todayMessages.length,
      pending: data.filter(msg => !msg.read).length
    };
  }, []);
  
  return (
    <>
      <div className="admin-dashboard">
        <Container fluid className="px-4 py-4">
          {/* Header */}
          <div className="mb-4">
            <h1 className="h3 fw-bold text-dark mb-2">Painel de Controle</h1>
            <p className="text-muted mb-0">Gerencie as mensagens e contatos dos usuários</p>
          </div>

          {/* Stats Cards */}
          <Row className="g-3 mb-4">
            <Col md={4}>
              <Card className="border-0 shadow-sm admin-stat-card">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="text-muted small mb-2 text-uppercase fw-semibold">Total de Mensagens</p>
                      <h2 className="h3 fw-bold mb-0 text-dark">{stats.total}</h2>
                    </div>
                    <div className="admin-icon-wrapper bg-primary-subtle">
                      <i className="bi bi-envelope-fill text-primary fs-4"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm admin-stat-card">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="text-muted small mb-2 text-uppercase fw-semibold">Hoje</p>
                      <h2 className="h3 fw-bold mb-0 text-dark">{stats.today}</h2>
                    </div>
                    <div className="admin-icon-wrapper bg-success-subtle">
                      <i className="bi bi-calendar-check-fill text-success fs-4"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm admin-stat-card">
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <p className="text-muted small mb-2 text-uppercase fw-semibold">Não Lidas</p>
                      <h2 className="h3 fw-bold mb-0 text-dark">{stats.pending}</h2>
                    </div>
                    <div className="admin-icon-wrapper bg-warning-subtle">
                      <i className="bi bi-bell-fill text-warning fs-4"></i>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Charts Row */}
          <Row className="g-3 mb-4">
            <Col lg={6}>
              <LocationChart />
            </Col>
            <Col lg={6}>
              <SubjectChart />
            </Col>
          </Row>

          {/* Table Card */}
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-0 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-1">Todas as Mensagens</h5>
                  <p className="text-muted small mb-0">Clique em uma linha para ver detalhes</p>
                </div>
                <button className="btn btn-sm btn-outline-success">
                  <i className="bi bi-download me-2"></i>
                  Exportar
                </button>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <UserContactTable setSelectedUserContact={setSelectedUserContact} />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
      
      {selectedUserContact && (
        <SlideOverPanel
          setSelectedUserContact={setSelectedUserContact}
          selectedUserContact={selectedUserContact}
        />
      )}
    </>
  );
};

export default UserContact;
