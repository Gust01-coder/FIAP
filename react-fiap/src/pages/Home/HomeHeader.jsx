const HomeHeader = () => {
  return (
    <header className="hero-section mt-56">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold">
              Transformando a agricultura com tecnologia acessível
            </h1>
            <p className="lead my-4">
              Soluções inovadoras para otimizar a produção agrícola, garantindo
              maior produtividade, redução de desperdícios e melhoria na cadeia
              logística.
            </p>
            <div className="d-flex gap-3">
              <a href="solucoes.html" className="btn btn-success btn-lg">
                Nossas Soluções
              </a>
              <a href="contato.html" className="btn btn-outline-dark btn-lg">
                Fale Conosco
              </a>
            </div>
            <div className="mt-4 d-flex align-items-center">
              <div className="me-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>Redução de desperdícios</span>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <span>Aumento de produtividade</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://i.pinimg.com/736x/59/c4/7f/59c47f70751c16774597375774bb5c7e.jpg"
              alt="Agricultura tecnológica"
              className="img-fluid rounded hero-image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
