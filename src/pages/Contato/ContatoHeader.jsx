const ContatoHeader = () => {
  return (
    <header className="page-header bg-light mt-56" id="top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3">Fale Conosco</h1>
            <p className="lead mb-0">
              Entre em contato para saber mais sobre nossas soluções ou agendar uma demonstração
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://i.pinimg.com/736x/86/e3/21/86e321a622914bd5b27fdb14fcd9f401.jpg"
              alt="Contato"
              className="img-fluid rounded shadow-hover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContatoHeader;
