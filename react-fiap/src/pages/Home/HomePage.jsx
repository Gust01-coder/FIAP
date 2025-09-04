import HomeHeader from "./HomeHeader";
import OdsOnu from "./sections/OdsOnuSection";
import SolucaoSection from "./sections/SolucaoSection";
import SuccessCasesSection from "./sections/SuccessCasesSection";
import CTASection from "../../components/CTASection";

const HomePage = () => {
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
        <a href="contato.html" class="btn btn-light btn-lg px-4">
          Entre em contato agora
        </a>
      </CTASection>
    </>
  );
};

export default HomePage;
