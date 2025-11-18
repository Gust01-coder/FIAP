import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext/useAuth";

const AdminNavbar = ({ onMenuToggle }) => {
  const { logout } = useAuth();
  const location = useLocation();
  const togglerRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    const toggler = togglerRef.current;
    const collapse = collapseRef.current;

    if (toggler && collapse) {
      const handleToggle = () => {
        if (collapse.classList.contains('show')) {
          collapse.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
        } else {
          collapse.classList.add('show');
          toggler.setAttribute('aria-expanded', 'true');
        }
        if (onMenuToggle) {
          onMenuToggle(!collapse.classList.contains('show'));
        }
      };

      toggler.addEventListener('click', handleToggle);

      return () => {
        toggler.removeEventListener('click', handleToggle);
      };
    }
  }, [onMenuToggle]);

  const menuItems = [
    {
      path: "/admin",
      icon: "bi-speedometer2",
      label: "Dashboard",
      exact: true,
    },
    {
      path: "/admin/mensagens",
      icon: "bi-envelope",
      label: "Mensagens",
    },
    {
      path: "/admin/estatisticas",
      icon: "bi-graph-up",
      label: "Estatísticas",
    },
    {
      path: "/admin/atividades",
      icon: "bi-clock-history",
      label: "Atividades",
    },
    {
      path: "/admin/configuracoes",
      icon: "bi-gear",
      label: "Configurações",
    },
  ];

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

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

        <button
          ref={togglerRef}
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbarNav"
          aria-controls="adminNavbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div ref={collapseRef} className="collapse navbar-collapse" id="adminNavbarNav">
          <Nav className="navbar-nav ms-auto align-items-lg-center d-lg-none">
            {menuItems.map((item) => (
              <Nav.Item key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive: active }) =>
                    `nav-link ${isActive(item.path, item.exact) || active ? "active" : ""}`
                  }
                  end={item.exact}
                >
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.label}
                </NavLink>
              </Nav.Item>
            ))}
            <Nav.Item>
              <button
                type="button"
                className="nav-link text-danger border-0 bg-transparent w-100 text-start"
                onClick={logout}
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Sair
              </button>
            </Nav.Item>
          </Nav>
        </div>

        <Nav className="ms-auto d-flex align-items-center d-none d-lg-flex">
          <Nav.Item className="me-2 me-md-3">
            <button className="btn btn-sm btn-outline-secondary border-0">
              <i className="bi bi-bell fs-5"></i>
            </button>
          </Nav.Item>

          <div className="d-flex align-items-center">
            <div className="admin-user-avatar me-2">
              <i className="bi bi-person-fill"></i>
            </div>
            <span className="text-dark fw-semibold">Admin</span>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
