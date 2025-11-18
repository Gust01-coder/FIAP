import SolucoesBtnGroup from "../SolucoesBtnGroup";

const AutomocaoSec = () => {
  return (
    <>
      <section id="automacao" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://i.pinimg.com/736x/06/ff/b0/06ffb08544c9f83ee64dd05334d76439.jpg"
                alt="Automação de Processos"
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6">
              <div className="solution-badge mb-3">
                <i className="bi bi-gear-wide-connected fs-2 text-success"></i>
              </div>
              <h2 className="fw-bold mb-3">Automação de Processos</h2>
              <p className="lead mb-4">
                Softwares e dispositivos para automatizar irrigação, detectar
                pragas e monitorar o clima, tornando sua produção mais eficiente
                e sustentável.
              </p>

              <div className="mb-4">
                <h5>Como funciona?</h5>
                <p>
                  Nossa plataforma integra dados de sensores de campo, previsões
                  meteorológicas e modelos preditivos para automatizar decisões
                  críticas. Sistemas de irrigação inteligente, detecção precoce
                  de pragas e monitoramento climático trabalham em conjunto para
                  otimizar cada aspecto da produção.
                </p>
              </div>

              <div className="mb-4">
                <h5>Benefícios</h5>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Economia de até 40% no consumo de água
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Detecção precoce de pragas e doenças
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Alertas de eventos climáticos em tempo real
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Assistente virtual para orientação técnica
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Redução no uso de defensivos agrícolas
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

export default AutomocaoSec;
