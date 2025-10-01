const CasosHeader = () => {
  return (
    <header className="page-header bg-light mt-56" id="top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="fw-bold mb-3">Casos de Sucesso</h1>
            <p className="lead mb-0">
              Conheça histórias reais de produtores que transformaram sua
              produção agrícola com nossas soluções
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-illustrated-business-strategy_52683-76245.jpg?t=st=1746843578~exp=1746847178~hmac=078df273483b4a09ecfc5b219254e9d6bfaa411f4bffcb857cf3369055a502ec&w=996"
              alt="Casos de Sucesso"
              className="img-fluid rounded shadow-hover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CasosHeader;
