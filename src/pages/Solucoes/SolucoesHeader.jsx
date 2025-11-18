const SolucoesHeader = () => {
  return (
    <>
      <header className="page-header bg-light mt-56" id="top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="fw-bold mb-3">Nossas Soluções</h1>
              <p className="lead mb-0">
                Tecnologias inovadoras para otimizar sua produção agrícola e
                reduzir desperdícios
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://i.pinimg.com/736x/f8/ad/a9/f8ada965b209677f711b6219de3c1221.jpg"
                alt="Soluções tecnológicas"
                className="img-fluid rounded shadow-hover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SolucoesHeader;
