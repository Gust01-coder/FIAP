const NossaPlataformaSec = () => {
  return (
    <>
       <section class="py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold">Nossa Plataforma</h2>
                <p class="lead mx-auto" style={{maxHeigh: 800}}>Uma solução completa e integrada para otimização da
                    produção agrícola</p>
            </div>

            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                                <i class="bi bi-graph-up-arrow fs-2 text-success"></i>
                            </div>
                            <h3 class="h5 mb-3">Dashboard Intuitivo</h3>
                            <p>Visualize todos os dados da sua produção de forma simples e acessível em um único lugar.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                                <i class="bi bi-phone fs-2 text-success"></i>
                            </div>
                            <h3 class="h5 mb-3">Aplicativo Móvel</h3>
                            <p>Acesse informações e receba alertas em tempo real, mesmo quando estiver no campo.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                                <i class="bi bi-people fs-2 text-success"></i>
                            </div>
                            <h3 class="h5 mb-3">Crowdsourcing</h3>
                            <p>Compartilhe e acesse dados de outros produtores para melhorar as práticas agrícolas de
                                todos.</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body text-center p-4">
                            <div class="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
                                <i class="bi bi-robot fs-2 text-success"></i>
                            </div>
                            <h3 class="h5 mb-3">Inteligência Artificial</h3>
                            <p>Algoritmos avançados que aprendem com seus dados para oferecer recomendações
                                personalizadas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default NossaPlataformaSec
