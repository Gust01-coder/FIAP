const NavBarContainer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <span className="logo-text">
            Agro<span className="text-success">Tech</span>
          </span>
        </a>
        <button
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="solucoes.html">
                Soluções
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sobre.html">
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="casos.html">
                Casos de Sucesso
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contato.html">
                Fale Conosco
              </a>
            </li>
          </ul>
          <button className="btn btn-success ms-lg-3">
            Experimentar Agora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBarContainer;
