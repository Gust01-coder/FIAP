import HomeHeader from "./HomeHeader";
import OdsOnu from "./sections/OdsOnuSection";
import SolucaoSection from "./sections/SolucaoSection";
import SuccessCasesSection from "./sections/SuccessCasesSection";
import CTASection from "../../components/CTASection";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/scroll";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToElement(id);
    }
  }, [location]);

  return (
    <>
      <HomeHeader />
      <OdsOnu />
      <SolucaoSection />
      <SuccessCasesSection />
      <CTASection
        title="Pronto para transformar sua produção agrícola?"
        subtitle="Junte-se a centenas de produtores que já otimizaram sua produção com nossas soluções."
      >
        <Link to="/contato#top" className="btn btn-light btn-lg px-4">
          Entre em contato agora
        </Link>
      </CTASection>
    </>
  );
};

export default HomePage;
