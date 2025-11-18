import SobreHeader from "./SobreHeader";
import HistoriaSection from "./sections/HistoriaSection";
import MissaoValoresSection from "./sections/MissaoValoresSection";
import EquipeSection from "./sections/EquipeSection";
import ParceirosSection from "./sections/ParceirosSection";
import CTASection from "../../components/CTASection";
import AlimentacaoObs from "./sections/AlimentacaoObs";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/scroll";
import { useEffect } from "react";

const SobrePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToElement(id);
    }
  }, [location]);

  return (
    <>
      <SobreHeader />
      <HistoriaSection />
      <MissaoValoresSection />
      <AlimentacaoObs />
      <EquipeSection />
      <ParceirosSection />
      <CTASection
        title="Quer fazer parte dessa transformação?"
        subtitle="Junte-se a nós na missão de tornar a agricultura mais eficiente e sustentável."
      >
        <Link to="/contato#top" className="btn btn-light btn-lg px-4">
          Entre em contato agora
        </Link>
      </CTASection>
    </>
  );
};

export default SobrePage;
