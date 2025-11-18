import SolucoesCard from "../SolucoesCard";

const SolucaoSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossas Soluções</h2>
          <p className="lead">
            Tecnologia inovadora para otimizar sua produção agrícola
          </p>
        </div>

        <div className="row g-4">
          <SolucoesCard
            titulo="Mapeamento do Solo"
            descricao="Tecnologia que utiliza sensores para medir a condutividade elétrica do solo, criando um mapa detalhado para otimizar o uso de recursos."
            ancora="mapeamento"
          />
          <SolucoesCard
            titulo="Gestão da Cadeia Logística"
            descricao="Uso de IoT e rastreamento para monitoramento em tempo real do transporte e armazenamento de produtos agrícolas."
            ancora="logistica"
          />
          <SolucoesCard
            titulo="Automação de Processos"
            descricao="Softwares para automatizar irrigação, detectar pragas e monitorar o clima, tornando sua produção mais eficiente."
            ancora="automacao"
          />
        </div>
      </div>
    </section>
  );
};

export default SolucaoSection;
