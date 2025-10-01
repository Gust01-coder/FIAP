import ContatoHeader from "./ContatoHeader";
import FormularioSection from "./sections/FormularioSection";
import MapaSection from "./sections/MapaSection";
import CTASection from "../../components/CTASection";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/scroll";
import { useEffect } from "react";

const ContatoPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToElement(id);
    }
  }, [location]);

  return (
    <>
      <ContatoHeader />
      <FormularioSection />
      <MapaSection />
      <CTASection
        title="Pronto para transformar sua produção agrícola?"
        subtitle="Estamos ansiosos para ajudar você a otimizar sua produção e reduzir desperdícios."
      >
        <Link to="/contato#top" className="btn btn-light btn-lg px-4">
          <i className="bi bi-telephone me-2"></i>
          (31) 9999-9999
        </Link>
      </CTASection>
    </>
  );
};

export default ContatoPage;
