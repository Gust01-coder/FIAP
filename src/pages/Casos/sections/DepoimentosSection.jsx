const DepoimentosSection = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">O que nossos clientes dizem</h2>
            <p className="lead">
              Depoimentos de produtores que utilizam as soluções AgroTech
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card testimonial-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://i.pinimg.com/736x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg"
                      alt="kermit"
                      className="rounded-circle me-3"
                      width="60"
                    />
                    <div>
                      <h5 className="mb-0">Kermit</h5>
                      <p className="text-muted mb-0">Produtor de Hortaliças</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0">
                    "O sistema de irrigação automatizado do AgroTech reduziu meu
                    consumo de água em 40% e melhorou significativamente a
                    qualidade das minhas hortaliças. Um investimento que se
                    pagou em menos de um ano."
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card testimonial-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://i.pinimg.com/736x/5c/fb/b6/5cfbb63e649f306ded784126278f945f.jpg"
                      alt="tomas"
                      className="rounded-circle me-3"
                      width="60"
                    />
                    <div>
                      <h5 className="mb-0">Tomas Shelby</h5>
                      <p className="text-muted mb-0">Produtor de Soja</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0">
                    "O mapeamento do solo foi um divisor de águas na minha
                    propriedade. Identificamos áreas que precisavam de
                    tratamentos diferentes e ajustamos a aplicação de insumos. O
                    resultado foi um aumento de 22% na produtividade."
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card testimonial-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://i.pinimg.com/736x/2a/8c/83/2a8c839914f9facd6fbaaef5abf9ff38.jpg"
                      alt="Shrek"
                      className="rounded-circle me-3"
                      width="60"
                    />
                    <div>
                      <h5 className="mb-0">Shrek</h5>
                      <p className="text-muted mb-0">Produtor de Frutas</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0">
                    "O assistente virtual do AgroTech me ajuda diariamente nas
                    decisões sobre manejo da plantação. Recebo alertas sobre
                    riscos de pragas e doenças baseados nas condições
                    climáticas, o que me permite agir preventivamente."
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

export default DepoimentosSection;
