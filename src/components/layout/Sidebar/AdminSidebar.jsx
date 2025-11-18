import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext/useAuth";

const AdminSidebar = ({ onToggle }) => {
  const { logout } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (onToggle) {
      onToggle(!isHovered);
    }
  }, [isHovered, onToggle]);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <aside 
      className={`admin-sidebar ${!isHovered ? "collapsed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menu de navegação */}
      <Nav className="sidebar-nav flex-column">
        {menuItems.map((item) => (
          <Nav.Item key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              end={item.exact}
            >
              <i className={`bi ${item.icon} sidebar-icon`}></i>
              {isHovered && (
                <span className="sidebar-label">{item.label}</span>
              )}
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>

      {/* Rodapé com logout */}
      <div className="sidebar-footer">
        <button
          type="button"
          className={`btn btn-outline-danger btn-sm w-100 sidebar-logout-btn ${
            !isHovered ? "collapsed" : ""
          }`}
          onClick={logout}
        >
          <i className="bi bi-box-arrow-right me-1"></i>
          {isHovered && <span>Sair</span>}
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;

