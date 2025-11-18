const SobreHeader = () => {
  return (
    <header className="page-header bg-light mt-56" id="top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3">Sobre Nós</h1>
            <p className="lead mb-0">
              Conheça mais sobre o projeto AgroTech e nossa equipe
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/img/teamwork.png"
              alt="Equipe AgroTech"
              className="img-fluid rounded shadow-hover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SobreHeader;
