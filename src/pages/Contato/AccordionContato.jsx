import GlobalAccordion from "../../components/Accordion";

export const AccordionContato = () => {
  const faqList = [
    {
      header: "Quanto tempo leva para receber uma resposta após o contato?",
      bodyText:
        "Respondemos a todas as mensagens em até 24 horas úteis. Para assuntos urgentes recomendamos entrar em contato por telefone."
    },
    {
      header: "Vocês atendem em todo o Brasil?",
      bodyText:
        "Sim, atendemos produtores rurais em todo o território nacional. Temos equipes técnicas em diversas regiões do país e também oferecemos suporte remoto para localidades mais distantes.",
    },
    {
      header: "Como funciona a demonstração das soluções?",
      bodyText:
        "Podemos realizar demonstrações remotas via videoconferência ou presenciais em sua propriedade. Durante a demonstração, apresentamos as soluções mais adequadas para o seu caso e mostramos como nossa tecnologia pode otimizar sua produção.",
    },
    {
      header: "Posso solicitar uma proposta personalizada?",
      bodyText:
        "Sim, elaboramos propostas personalizadas de acordo com as necessidades específicas de cada produtor. Basta preencher o formulário de contato ou nos ligar para agendar uma conversa com nossa equipe comercial.",
    },
  ];

  return <GlobalAccordion lista={faqList} />;
};
