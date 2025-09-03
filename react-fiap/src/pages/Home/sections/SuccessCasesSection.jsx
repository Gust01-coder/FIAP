const SuccessCasesSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Casos de Sucesso</h2>
          <p className="lead">
            Conheça quem já está otimizando sua produção com o AgroTech
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card testimonial-card h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg"
                    alt="João"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0">João Silva</h5>
                    <p className="text-muted mb-0">Pequeno Agricultor</p>
                  </div>
                </div>
                <p className="mb-0">
                  "Com o mapeamento do solo do AgroTech, consegui reduzir o uso
                  de fertilizantes em 30% e aumentar minha produção de milho. A
                  tecnologia é simples de usar e mudou minha forma de
                  trabalhar."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card testimonial-card h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://i.pinimg.com/736x/9d/d3/73/9dd373a99729a30e8f24cfb02d4ce147.jpg"
                    alt="Maria"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0">Maria Oliveira</h5>
                    <p className="text-muted mb-0">Produtora Rural</p>
                  </div>
                </div>
                <p className="mb-0">
                  "As soluções do AgroTech me ajudaram a identificar áreas com
                  baixa fertilidade no meu terreno. Agora tenho um assistente
                  virtual que me orienta sobre o uso de defensivos e fornece
                  insights valiosos."
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card testimonial-card h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://i.pinimg.com/736x/81/de/5e/81de5ee8bf8c1559462a7be0a3b1cbdd.jpg"
                    alt="Carlos"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0">Carlos Mendes</h5>
                    <p className="text-muted mb-0">Cooperativista</p>
                  </div>
                </div>
                <p className="mb-0">
                  "A gestão logística do AgroTech reduziu nossas perdas durante
                  o transporte em 25%. Os sensores de temperatura e o sistema de
                  rastreamento são excelentes para garantir a qualidade dos
                  produtos."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="casos.html" className="btn btn-success">
            Ver mais histórias de sucesso
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;
