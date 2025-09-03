const MapeamentoSec = () => {
  return (
    <>
      <section id="mapeamento" class="py-5">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-6">
                    <img src="https://i.pinimg.com/736x/d2/31/3b/d2313bf47264e5aad16515bc9070ef32.jpg" alt="Mapeamento do Solo" class="img-fluid rounded-3 shadow" />
                </div>
                <div class="col-lg-6">
                    <div class="solution-badge mb-3">
                        <i class="bi bi-moisture fs-2 text-success"></i>
                    </div>
                    <h2 class="fw-bold mb-3">Mapeamento do Solo - Carta de Eletrocondutividade</h2>
                    <p class="lead mb-4">Tecnologia que utiliza sensores para medir a condutividade elétrica do solo,
                        criando um mapa detalhado das características e necessidades do terreno.</p>

                    <div class="mb-4">
                        <h5>Como funciona?</h5>
                        <p>Nossos sensores avançados captam a condutividade elétrica em diferentes profundidades do
                            solo, gerando mapas precisos das características físicas e químicas. Os dados são
                            processados por nossa plataforma e convertidos em recomendações práticas.</p>
                    </div>

                    <div class="mb-4">
                        <h5>Benefícios</h5>
                        <ul class="feature-list">
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Redução de até 30% no uso de
                                fertilizantes</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Identificação de áreas com
                                diferentes necessidades de manejo</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Otimização da irrigação e
                                aplicação de insumos</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Aumento da produtividade e
                                qualidade das colheitas</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Menor impacto ambiental</li>
                        </ul>
                    </div>

                    <div class="d-flex gap-3">
                        <a href="contato.html" class="btn btn-success">Solicitar demonstração</a>
                        <a href="casos.html" class="btn btn-outline-success">Ver casos de sucesso</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default MapeamentoSec
