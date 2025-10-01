import GlobalAccordion from "../../components/Accordion";

export const AccordionSolucoes = () => {
  const faqList = [
    {
      header: "Quanto custa implementar o AgroTech?",
      bodyText:
        "Os preços variam de acordo com o tamanho da propriedade e as soluções escolhidas. Oferecemos planos flexíveis e acessíveis, especialmente pensados para pequenos e médios produtores. Entre em contato conosco para uma cotação personalizada.",
    },
    {
      header: "É necessário ter internet na propriedade?",
      bodyText:
        "Nossos sensores podem funcionar offline, armazenando dados para sincronização posterior. No entanto, para aproveitar recursos como alertas em tempo real e monitoramento remoto, é recomendável ter conexão à internet. Oferecemos soluções de conectividade rural para áreas com cobertura limitada.",
    },
    {
      header: "Quanto tempo leva para implementar as soluções?",
      bodyText:
        "O tempo de implementação varia conforme a solução e o tamanho da propriedade. O mapeamento do solo pode ser concluído em poucos dias, enquanto sistemas completos de automação podem levar algumas semanas. Nossa equipe trabalha para minimizar o impacto na sua operação durante a instalação.",
    },
    {
      header: "Oferecem suporte técnico?",
      bodyText:
        "Sim, oferecemos suporte técnico completo, incluindo instalação, treinamento e manutenção. Nossa equipe está disponível para ajudar por telefone, e-mail ou visitas técnicas quando necessário.",
    },
  ];

  return <GlobalAccordion lista={faqList} />;
};
