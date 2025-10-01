const NossaPlataformaSec = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Nossa Plataforma</h2>
            <p className="lead mx-auto" style={{ maxHeigh: 800 }}>
              Uma solução completa e integrada para otimização da produção
              agrícola
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                    <i className="bi bi-graph-up-arrow fs-2 text-success"></i>
                  </div>
                  <h3 className="h5 mb-3">Dashboard Intuitivo</h3>
                  <p>
                    Visualize todos os dados da sua produção de forma simples e
                    acessível em um único lugar.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                    <i className="bi bi-phone fs-2 text-success"></i>
                  </div>
                  <h3 className="h5 mb-3">Aplicativo Móvel</h3>
                  <p>
                    Acesse informações e receba alertas em tempo real, mesmo
                    quando estiver no campo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                    <i className="bi bi-people fs-2 text-success"></i>
                  </div>
                  <h3 className="h5 mb-3">Crowdsourcing</h3>
                  <p>
                    Compartilhe e acesse dados de outros produtores para
                    melhorar as práticas agrícolas de todos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                    <i className="bi bi-robot fs-2 text-success"></i>
                  </div>
                  <h3 className="h5 mb-3">Inteligência Artificial</h3>
                  <p>
                    Algoritmos avançados que aprendem com seus dados para
                    oferecer recomendações personalizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NossaPlataformaSec;
