const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3">AgroTech</h5>
            <p>
              Soluções tecnológicas para a otimização da produção agrícola,
              garantindo maior produtividade, redução de desperdícios e melhoria
              na cadeia logística.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="fw-bold mb-3">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="index.html"
                  className="text-white text-decoration-none"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="solucoes.html"
                  className="text-white text-decoration-none"
                >
                  Soluções
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="sobre.html"
                  className="text-white text-decoration-none"
                >
                  Sobre Nós
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="casos.html"
                  className="text-white text-decoration-none"
                >
                  Casos de Sucesso
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="contato.html"
                  className="text-white text-decoration-none"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold mb-3">Contato</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i> Belo Horizonte, MG,
                Brasil
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i> (31) 9999-9999
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i> contato@agrotech.com.br
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p>Receba novidades e atualizações sobre nossos produtos</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Seu e-mail"
              />
              <button className="btn btn-success" type="button">
                Inscrever
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">
            &copy; 2023 AgroTech. Todos os direitos reservados.
          </p>
          <p className="small mt-2">
            Projeto Acadêmico - PBL Engenharia de Software - The Future Is Now
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
