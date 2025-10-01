import { AccordionSolucoes } from "../AccordionSolucoes";


const PerguntasFrequentesSec = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Perguntas Frequentes</h2>
            <p className="lead">Tire suas dúvidas sobre as nossas soluções</p>
          </div>
          <AccordionSolucoes />
        </div >
      </section >
    </>
  );
};

export default PerguntasFrequentesSec;
