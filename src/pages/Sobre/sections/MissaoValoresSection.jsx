const MissaoValoresSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box bg-success bg-opacity-10 me-3">
                    <i className="bi bi-bullseye text-success fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Missão</h3>
                </div>
                <p className="mb-0">
                  Desenvolver e implementar soluções tecnológicas inovadoras que otimizem a produção agrícola,
                  promovendo a sustentabilidade e contribuindo para a segurança alimentar global.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box bg-success bg-opacity-10 me-3">
                    <i className="bi bi-eye text-success fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Visão</h3>
                </div>
                <p className="mb-0">
                  Ser referência em soluções tecnológicas para agricultura sustentável, conectando produtores
                  e tecnologia para um futuro mais produtivo e responsável.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box bg-success bg-opacity-10 me-3">
                    <i className="bi bi-heart text-success fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Valores</h3>
                </div>
                <ul className="feature-list mb-0">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Inovação e tecnologia</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Sustentabilidade</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Responsabilidade social</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Excelência</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box bg-success bg-opacity-10 me-3">
                    <i className="bi bi-flag text-success fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Objetivos</h3>
                </div>
                <ul className="feature-list mb-0">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Reduzir desperdícios agrícolas</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Otimizar recursos hídricos</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Melhorar a logística</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Promover agricultura sustentável</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoValoresSection;
