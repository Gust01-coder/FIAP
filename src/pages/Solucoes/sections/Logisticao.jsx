import SolucoesBtnGroup from "../SolucoesBtnGroup";

const LogisticaoSec = () => {
  return (
    <>
      <section id="logistica" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <img
                src="https://i.pinimg.com/736x/76/5f/23/765f2344c8ad3a062a95ccf6931db471.jpg"
                alt="Gestão da Cadeia Logística"
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="solution-badge mb-3">
                <i className="bi bi-truck fs-2 text-success"></i>
              </div>
              <h2 className="fw-bold mb-3">Gestão da Cadeia Logística</h2>
              <p className="lead mb-4">
                Uso de IoT e rastreamento para monitoramento em tempo real do
                transporte e armazenamento de produtos agrícolas, garantindo
                qualidade e reduzindo perdas.
              </p>

              <div className="mb-4">
                <h5>Como funciona?</h5>
                <p>
                  Sensores IoT monitoram temperatura, umidade e condições de
                  armazenamento em tempo real. Nosso sistema de rastreamento
                  permite acompanhar toda a cadeia logística, desde a colheita
                  até o destino final, com alertas automáticos em caso de
                  desvios das condições ideais.
                </p>
              </div>

              <div className="mb-4">
                <h5>Benefícios</h5>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Redução de até 25% nas perdas durante o transporte
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Monitoramento em tempo real das condições de armazenamento
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Rastreabilidade completa dos produtos
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Otimização das rotas de transporte
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Melhoria na qualidade final dos produtos
                  </li>
                </ul>
              </div>

              <SolucoesBtnGroup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogisticaoSec;
