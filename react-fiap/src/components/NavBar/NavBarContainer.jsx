const NavBarContainer = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="index.html">
          <span class="logo-text">
            Agro<span class="text-success">Tech</span>
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="solucoes.html">
                Soluções
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sobre.html">
                Sobre Nós
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="casos.html">
                Casos de Sucesso
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contato.html">
                Fale Conosco
              </a>
            </li>
          </ul>
          <button class="btn btn-success ms-lg-3">Experimentar Agora</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBarContainer;
