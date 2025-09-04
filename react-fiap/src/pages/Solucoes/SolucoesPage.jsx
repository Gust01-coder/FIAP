import LogisticaoSec from "./sections/Logisticao";
import MapeamentoSec from "./sections/Mapeamento";
import SolucoesHeader from "./SolucoesHeader";
import AutomocaoSec from "./sections/Automacao";
import NossaPlataformaSec from "./sections/NossaPlataforma";
import PerguntasFrequentesSec from "./sections/PerguntasFrequentes";
import CTASection from "../../components/CTASection";

const SolucoesPage = () => {
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
        subtitle="Junte-se a centenas de produtores que já otimizaram sua produção com nossas soluções."
      >
        <a href="contato.html" class="btn btn-light btn-lg px-4">
          Entre em contato agora
        </a>
      </CTASection>
    </>
  );
};

export default SolucoesPage;
