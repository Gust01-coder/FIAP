const ResultadosSection = () => {
  const resultados = [
    { valor: "30%", descricao: "Redução média no uso de fertilizantes" },
    { valor: "25%", descricao: "Redução nas perdas durante o transporte" },
    { valor: "40%", descricao: "Economia no consumo de água" },
    { valor: "20%", descricao: "Aumento médio na produtividade" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Resultados Comprovados</h2>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            Produtores que implementaram as soluções AgroTech obtiveram
            melhorias significativas em seus processos de produção
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4 text-center">
          {resultados.map((resultado, index) => (
            <div key={index} className="col">
              <div className="result-box p-4 rounded">
                <div className="display-4 fw-bold mb-2">{resultado.valor}</div>
                <p className="mb-0">{resultado.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultadosSection;
