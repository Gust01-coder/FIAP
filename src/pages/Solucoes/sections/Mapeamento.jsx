import SolucoesBtnGroup from "../SolucoesBtnGroup";

const MapeamentoSec = () => {
  return (
    <>
      <section id="mapeamento" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://i.pinimg.com/736x/d2/31/3b/d2313bf47264e5aad16515bc9070ef32.jpg"
                alt="Mapeamento do Solo"
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-lg-6">
              <div className="solution-badge mb-3">
                <i className="bi bi-moisture fs-2 text-success"></i>
              </div>
              <h2 className="fw-bold mb-3">
                Mapeamento do Solo - Carta de Eletrocondutividade
              </h2>
              <p className="lead mb-4">
                Tecnologia que utiliza sensores para medir a condutividade
                elétrica do solo, criando um mapa detalhado das características
                e necessidades do terreno.
              </p>

              <div className="mb-4">
                <h5>Como funciona?</h5>
                <p>
                  Nossos sensores avançados captam a condutividade elétrica em
                  diferentes profundidades do solo, gerando mapas precisos das
                  características físicas e químicas. Os dados são processados
                  por nossa plataforma e convertidos em recomendações práticas.
                </p>
              </div>

              <div className="mb-4">
                <h5>Benefícios</h5>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Redução de até 30% no uso de fertilizantes
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Identificação de áreas com diferentes necessidades de manejo
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Otimização da irrigação e aplicação de insumos
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Aumento da produtividade e qualidade das colheitas
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    Menor impacto ambiental
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

export default MapeamentoSec;
