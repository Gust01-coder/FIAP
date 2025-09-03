const SolucaoSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossas Soluções</h2>
          <p className="lead">
            Tecnologia inovadora para otimizar sua produção agrícola
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                  <i className="bi bi-moisture fs-2 text-success"></i>
                </div>
                <h3 className="h4 mb-3">Mapeamento do Solo</h3>
                <p>
                  Tecnologia que utiliza sensores para medir a condutividade
                  elétrica do solo, criando um mapa detalhado para otimizar o
                  uso de recursos.
                </p>
                <a
                  href="solucoes.html#mapeamento"
                  className="btn btn-outline-success mt-3"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                  <i className="bi bi-truck fs-2 text-success"></i>
                </div>
                <h3 className="h4 mb-3">Gestão da Cadeia Logística</h3>
                <p>
                  Uso de IoT e rastreamento para monitoramento em tempo real do
                  transporte e armazenamento de produtos agrícolas.
                </p>
                <a
                  href="solucoes.html#logistica"
                  className="btn btn-outline-success mt-3"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                  <i className="bi bi-gear-wide-connected fs-2 text-success"></i>
                </div>
                <h3 className="h4 mb-3">Automação de Processos</h3>
                <p>
                  Softwares para automatizar irrigação, detectar pragas e
                  monitorar o clima, tornando sua produção mais eficiente.
                </p>
                <a
                  href="solucoes.html#automacao"
                  className="btn btn-outline-success mt-3"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucaoSection;
