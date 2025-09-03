const PerguntasFrequentesSec = () => {
  return (
    <>
      <section class="py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="fw-bold">Perguntas Frequentes</h2>
            <p class="lead">Tire suas dúvidas sobre as nossas soluções</p>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="accordion" id="faqAccordion">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Quanto custa implementar o AgroTech?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      Os preços variam de acordo com o tamanho da propriedade e as soluções escolhidas.
                      Oferecemos planos flexíveis e acessíveis, especialmente pensados para pequenos e
                      médios produtores. Entre em contato conosco para uma cotação personalizada.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      É necessário ter internet na propriedade?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      Nossos sensores podem funcionar offline, armazenando dados para sincronização
                      posterior. No entanto, para aproveitar recursos como alertas em tempo real e
                      monitoramento remoto, é recomendável ter conexão à internet. Oferecemos soluções de
                      conectividade rural para áreas com cobertura limitada.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Quanto tempo leva para implementar as soluções?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      O tempo de implementação varia conforme a solução e o tamanho da propriedade. O
                      mapeamento do solo pode ser concluído em poucos dias, enquanto sistemas completos de
                      automação podem levar algumas semanas. Nossa equipe trabalha para minimizar o
                      impacto na sua operação durante a instalação.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Oferecem suporte técnico?
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      Sim, oferecemos suporte técnico completo, incluindo instalação, treinamento e
                      manutenção. Nossa equipe está disponível para ajudar por telefone, e-mail ou visitas
                      técnicas quando necessário.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PerguntasFrequentesSec
