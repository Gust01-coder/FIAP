import { Link, Links } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">AgroTech</h5>
            <p>
              Soluções tecnológicas para a otimização da produção agrícola,
              garantindo maior produtividade, redução de desperdícios e melhoria
              na cadeia logística.
            </p>
            <div className="d-flex gap-3 mt-4 footer-social-links">
              <a href="#" className="text-white social-link" aria-label="Facebook">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white social-link" aria-label="Instagram">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white social-link" aria-label="Twitter">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-white social-link" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold mb-3">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/#home-header"
                  className="text-white text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/solucoes#top"
                  className="text-white text-decoration-none"
                >
                  Soluções
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/sobre#top"
                  className="text-white text-decoration-none"
                >
                  Sobre Nós
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/casos#top"
                  className="text-white text-decoration-none"
                >
                  Casos de Sucesso
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contato#top"
                  className="text-white text-decoration-none"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="fw-bold mb-3">Contato</h5>
            <ul className="list-unstyled footer-contact-list">
              <li className="mb-3">
                <i className="bi bi-geo-alt me-2"></i> 
                <span className="d-inline">Belo Horizonte, MG, Brasil</span>
              </li>
              <li className="mb-3">
                <a href="tel:+5531999999999" className="text-white text-decoration-none">
                  <i className="bi bi-telephone me-2"></i> (31) 9999-9999
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:contato@agrotech.com.br" className="text-white text-decoration-none">
                  <i className="bi bi-envelope me-2"></i> contato@agrotech.com.br
                </a>
              </li>
            </ul>
          </div>
          <Newsletter />
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
