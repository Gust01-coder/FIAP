const HistoriaSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Nossa História</h2>
            <p className="lead mb-4">
              O projeto AgroTech nasceu da visão de um grupo de estudantes de Engenharia de
              Software que buscavam aplicar conhecimentos tecnológicos para resolver problemas reais na
              agricultura.
            </p>
            <p>
              Inspirados pelos desafios enfrentados por pequenos e médios produtores rurais, decidimos criar
              soluções tecnológicas acessíveis que pudessem otimizar a produção agrícola, garantindo maior
              produtividade, redução de desperdícios e melhoria na cadeia logística.
            </p>
            <p>
              Alinhados às metas da ODS 2 da ONU, desenvolvemos um ecossistema de soluções que contribuem para
              a erradicação da fome, melhoria da segurança alimentar e nutrição sustentável.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/img/Agrotech.jpg" alt="Nossa história" className="img-fluid rounded-3 shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
