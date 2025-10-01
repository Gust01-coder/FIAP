import { Link } from "react-router-dom";
import TestemunhoCard from "../TestemunhoCard";

const SuccessCasesSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Casos de Sucesso</h2>
          <p className="lead">
            Conheça quem já está otimizando sua produção com o AgroTech
          </p>
        </div>

        <div className="row">
          <TestemunhoCard
            img="https://i.pinimg.com/736x/87/22/ec/8722ec261ddc86a44e7feb3b46836c10.jpg"
            nome="João Silva"
            profissao="Pequeno Agricultor"
            testemunho='"Com o mapeamento do solo do AgroTech, consegui reduzir o uso
                  de fertilizantes em 30% e aumentar minha produção de milho. A
                  tecnologia é simples de usar e mudou minha forma de
                  trabalhar."'
          />

          <TestemunhoCard
            img="https://i.pinimg.com/736x/9d/d3/73/9dd373a99729a30e8f24cfb02d4ce147.jpg"
            nome="Maria Oliveira"
            profissao="Produtora Rural"
            testemunho='"As soluções do AgroTech me ajudaram a identificar áreas com
                  baixa fertilidade no meu terreno. Agora tenho um assistente
                  virtual que me orienta sobre o uso de defensivos e fornece
                  insights valiosos."'
          />

          <TestemunhoCard
            img="https://i.pinimg.com/736x/81/de/5e/81de5ee8bf8c1559462a7be0a3b1cbdd.jpg"
            nome="Carlos Mendes"
            profissao="Cooperativista"
            testemunho='"A gestão logística do AgroTech reduziu nossas perdas durante
                  o transporte em 25%. Os sensores de temperatura e o sistema de
                  rastreamento são excelentes para garantir a qualidade dos
                  produtos."'
          />
        </div>

        <div className="text-center mt-4">
          <Link to="casos#top" className="btn btn-success">
            Ver mais histórias de sucesso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;
