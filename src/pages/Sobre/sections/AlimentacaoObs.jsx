const AlimentacaoObs = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <div className="ods-image text-center">
                <img
                  src="img/ODS 2.png"
                  alt="ODS 2"
                  className="img-fluid rounded-3 shadow"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h2 className="fw-bold mb-4">Alinhamento com a ODS 2</h2>
              <p className="lead mb-4">
                A solução AgroTech está alinhada com a meta da ODS 2 de
                erradicar a fome e melhorar a nutrição até 2030.
              </p>

              <div className="mb-4">
                <h5>Como contribuímos:</h5>
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    <strong>Meta 2.1:</strong>
                    Contribuímos para o acesso a alimentos seguros e nutritivos
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    <strong>Meta 2.3:</strong>
                    Aumentamos a produtividade agrícola e a renda dos pequenos
                    produtores
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    <strong>Meta 2.4:</strong>
                    Promovemos sistemas sustentáveis de produção de alimentos
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                    <strong>Meta 2.a:</strong>
                    Aumentamos o investimento em infraestrutura rural e
                    tecnologia
                  </li>
                </ul>
              </div>

              <p>
                Ao otimizar a produção agrícola com tecnologias acessíveis,
                ajudamos a promover a segurança alimentar e o desenvolvimento
                sustentável, alinhando nossa atuação com os objetivos globais da
                ONU.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlimentacaoObs;
