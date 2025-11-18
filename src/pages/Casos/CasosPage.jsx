import CasosHeader from "./CasosHeader";
import ResultadosSection from "./sections/ResultadosSection";
import ValeVerde from "./sections/ValeVerde";
import DepoimentosSection from "./sections/DepoimentosSection";
import CTASection from "../../components/CTASection";
import { Link } from "react-router-dom";
import HistoriasDeSuccesso from "./sections/HistoriasDeSuccesso";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/scroll";
import { useEffect } from "react";

const CasosPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToElement(id);
    }
  }, [location]);

  return (
    <>
      <CasosHeader />
      <ResultadosSection />
      <ValeVerde />
      <HistoriasDeSuccesso />
      <DepoimentosSection />
      <CTASection
        title="Pronto para fazer parte dessas histórias de sucesso?"
        subtitle="Junte-se a centenas de produtores que já transformaram sua produção com o AgroTech."
      >
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/solucoes#top" className="btn btn-light btn-lg px-4">
            Conheça nossas soluções
          </Link>
          <Link to="/contato#top" className="btn btn-outline-light btn-lg px-4">
            Entre em contato
          </Link>
        </div>
      </CTASection>
    </>
  );
};

export default CasosPage;
