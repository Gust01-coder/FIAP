const CasosSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src="https://i.pinimg.com/736x/46/6c/6d/466c6d29d5927c7c353df7cbf94c70ae.jpg"
              alt="Cooperativa Vale Verde"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-6">
            <div className="featured-badge mb-3">
              <span className="badge bg-success px-3 py-2">
                Caso em Destaque
              </span>
            </div>
            <h2 className="fw-bold mb-3">Cooperativa Vale Verde</h2>
            <p className="lead mb-4">
              A Cooperativa Vale Verde, com 120 produtores de café, implementou
              o sistema completo de soluções AgroTech e revolucionou sua
              produção.
            </p>

            <div className="mb-4">
              <h5>Desafio</h5>
              <p>
                A cooperativa enfrentava problemas com desperdício de insumos,
                alto consumo de água e perdas significativas durante o
                transporte do café, impactando a qualidade final do produto e
                reduzindo a lucratividade dos cooperados.
              </p>
            </div>

            <div className="mb-4">
              <h5>Solução</h5>
              <p>
                Implementamos o sistema completo AgroTech, incluindo mapeamento
                do solo, gestão da cadeia logística e automação de processos. A
                coleta e análise de dados permitiu decisões mais precisas e
                personalizadas para cada área de cultivo.
              </p>
            </div>

            <div className="mb-4">
              <h5>Resultados</h5>
              <ul className="feature-list">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Redução de 35% no uso de fertilizantes
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Economia de 42% no consumo de água
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Diminuição de 28% nas perdas durante o transporte
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Aumento de 22% na qualidade final do café
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Incremento médio de 18% na renda dos cooperados
                </li>
              </ul>
            </div>

            <blockquote className="blockquote border-start border-success border-4 ps-4 mt-4">
              <p>
                "O AgroTech transformou completamente nossa forma de produzir
                café. Os resultados superaram todas as nossas expectativas,
                tanto em termos de redução de custos quanto de aumento na
                qualidade do nosso produto."
              </p>
              <footer className="blockquote-footer mt-2" style={{ backgroundColor: 'transparent', color: 'inherit' }}>
                Roberto Mendes, Presidente da Cooperativa Vale Verde
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasosSection;
