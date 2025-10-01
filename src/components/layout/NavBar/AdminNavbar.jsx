import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext/useAuth";

const AdminNavbar = () => {
  const { logout } = useAuth();

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="admin-navbar shadow-sm"
      style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e9ecef' }}
    >
      <Container fluid className="px-4">
        <Navbar.Brand className="d-flex align-items-center">
          <div className="admin-brand-icon me-2">
            <i className="bi bi-grid-fill"></i>
          </div>
          <div>
            <span className="logo-text fw-bold">
              Agro<span className="text-success">Tech</span>
            </span>
            <span className="text-muted ms-2 fw-normal">Admin</span>
          </div>
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Item className="me-3">
            <button className="btn btn-sm btn-outline-secondary border-0">
              <i className="bi bi-bell fs-5"></i>
            </button>
          </Nav.Item>

          <Dropdown align="end">
            <Dropdown.Toggle 
              variant="link" 
              className="text-decoration-none p-0 border-0 d-flex align-items-center"
              id="user-dropdown"
            >
              <div className="admin-user-avatar me-2">
                <i className="bi bi-person-fill"></i>
              </div>
              <span className="text-dark fw-semibold d-none d-md-inline">Admin</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow-sm border-0 mt-2">
              <Dropdown.Item onClick={logout} className="text-danger">
                <i className="bi bi-box-arrow-right me-2"></i>
                Sair
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
