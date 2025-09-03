const LogisticaoSec = () => {
  return (
    <>
       <section id="logistica" class="py-5 bg-light">
        <div class="container">
            <div class="row align-items-center g-5">
                <div class="col-lg-6 order-lg-2">
                    <img src="https://i.pinimg.com/736x/76/5f/23/765f2344c8ad3a062a95ccf6931db471.jpg" alt="Gestão da Cadeia Logística" class="img-fluid rounded-3 shadow" />
                </div>
                <div class="col-lg-6 order-lg-1">
                    <div class="solution-badge mb-3">
                        <i class="bi bi-truck fs-2 text-success"></i>
                    </div>
                    <h2 class="fw-bold mb-3">Gestão da Cadeia Logística</h2>
                    <p class="lead mb-4">Uso de IoT e rastreamento para monitoramento em tempo real do transporte e
                        armazenamento de produtos agrícolas, garantindo qualidade e reduzindo perdas.</p>

                    <div class="mb-4">
                        <h5>Como funciona?</h5>
                        <p>Sensores IoT monitoram temperatura, umidade e condições de armazenamento em tempo real. Nosso
                            sistema de rastreamento permite acompanhar toda a cadeia logística, desde a colheita até o
                            destino final, com alertas automáticos em caso de desvios das condições ideais.</p>
                    </div>

                    <div class="mb-4">
                        <h5>Benefícios</h5>
                        <ul class="feature-list">
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Redução de até 25% nas perdas
                                durante o transporte</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Monitoramento em tempo real
                                das condições de armazenamento</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Rastreabilidade completa dos
                                produtos</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Otimização das rotas de
                                transporte</li>
                            <li><i class="bi bi-check-circle-fill text-success me-2"></i> Melhoria na qualidade final
                                dos produtos</li>
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

export default LogisticaoSec
