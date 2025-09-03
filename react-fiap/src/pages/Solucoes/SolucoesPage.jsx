import LogisticaoSec from "./sections/Logisticao";
import MapeamentoSec from "./sections/Mapeamento";
import SolucoesHeader from "./SolucoesHeader";
import AutomocaoSec from "./sections/Automacao";
import NossaPlataformaSec from "./sections/NossaPlataforma";
import PerguntasFrequentesSec from "./sections/PerguntasFrequentes";
import EntreEmContato from "./sections/EntreEmContato";

const SolucoesPage = () => {
  return (
    <>
      <SolucoesHeader />
      <MapeamentoSec />
      <LogisticaoSec />
      <AutomocaoSec />
      <NossaPlataformaSec />
      <PerguntasFrequentesSec />
      <EntreEmContato />
    </>
  );
};

export default SolucoesPage;
