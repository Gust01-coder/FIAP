import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const NavBarContainer = () => {
  const location = useLocation();
  const togglerRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    // Garantir que o Bootstrap Collapse seja inicializado
    const toggler = togglerRef.current;
    const collapse = collapseRef.current;

    if (toggler && collapse) {
      // Manipulador de clique manual como fallback
      const handleToggle = () => {
        if (collapse.classList.contains('show')) {
          collapse.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
        } else {
          collapse.classList.add('show');
          toggler.setAttribute('aria-expanded', 'true');
        }
      };

      toggler.addEventListener('click', handleToggle);

      return () => {
        toggler.removeEventListener('click', handleToggle);
      };
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/#home-header">
          <span className="logo-text">
            Agro<span className="text-success">Tech</span>
          </span>
        </Link>
        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div ref={collapseRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/#home-header"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/solucoes" ? "active" : ""
                }`}
                to="/solucoes#top"
              >
                Soluções
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/sobre" ? "active" : ""
                }`}
                to="/sobre#top"
              >
                Sobre Nós
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/casos" ? "active" : ""
                }`}
                to="/casos#top"
              >
                Casos de Sucesso
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contato" ? "active" : ""
                }`}
                to="/contato#top"
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarContainer;
