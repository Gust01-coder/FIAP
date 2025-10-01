import LogisticaoSec from "./sections/Logisticao";
import MapeamentoSec from "./sections/Mapeamento";
import SolucoesHeader from "./SolucoesHeader";
import AutomocaoSec from "./sections/Automacao";
import NossaPlataformaSec from "./sections/NossaPlataforma";
import PerguntasFrequentesSec from "./sections/PerguntasFrequentes";
import CTASection from "../../components/CTASection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/scroll";
import { Link } from "react-router-dom";

const SolucoesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToElement(id);
    }
  }, [location]);

  return (
    <>
      <SolucoesHeader />
      <MapeamentoSec />
      <LogisticaoSec />
      <AutomocaoSec />
      <NossaPlataformaSec />
      <PerguntasFrequentesSec />
      <CTASection
        title="Pronto para transformar sua produção agrícola?"
        subtitle="Agende uma demonstração gratuita e conheça na prática como nossas soluções podem otimizar sua produção."
      >
        <Link to="/contato#top" className="btn btn-light btn-lg px-4">
          Entre em contato agora
        </Link>
      </CTASection>
    </>
  );
};

export default SolucoesPage;
