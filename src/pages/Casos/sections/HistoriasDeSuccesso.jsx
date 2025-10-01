import React from "react";

const HistoriasDeSuccesso = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Histórias de Sucesso</h2>
          <p className="lead">
            Conheça como nossos clientes transformaram suas propriedades com o
            AgroTech
          </p>
        </div>

        <div className="card border-0 shadow-sm mb-5">
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.pinimg.com/736x/40/ee/56/40ee567f8cf4a1719428e8bc5c1632a5.jpg"
                  alt="Arthur Silva"
                  className="img-fluid h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://i.pinimg.com/736x/40/ee/56/40ee567f8cf4a1719428e8bc5c1632a5.jpg"
                      alt="Arthur Silva"
                      className="rounded-circle me-3"
                      width="60"
                    />
                    <div>
                      <h3 className="h4 mb-0">Arthur Morgan</h3>
                      <p className="text-muted mb-0">
                        Pequeno Agricultor - Uberlândia, MG
                      </p>
                    </div>
                  </div>

                  <h4 className="fw-bold mb-3">Desafio</h4>
                  <p>
                    Arthur cultivava milho e feijão em sua propriedade de 15
                    hectares, mas enfrentava dificuldades para analisar
                    corretamente o solo, resultando em uso excessivo de
                    fertilizantes e baixa produtividade em algumas áreas.
                  </p>

                  <h4 className="fw-bold mb-3">Solução</h4>
                  <p>
                    Implementou o Mapeamento do Solo AgroTech, que identificou
                    diferentes zonas de manejo em sua propriedade, permitindo
                    aplicação direcionada de insumos e otimização da irrigação.
                  </p>

                  <h4 className="fw-bold mb-3">Resultados</h4>
                  <div className="row row-cols-1 row-cols-sm-3 g-3 mb-4">
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">30%</div>
                        <p className="small mb-0">
                          Redução no uso de fertilizantes
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">25%</div>
                        <p className="small mb-0">
                          Aumento na produção de milho
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">15%</div>
                        <p className="small mb-0">Aumento na renda</p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="blockquote border-start border-success border-4 ps-4">
                    <p className="mb-0">
                      "Com o mapeamento do solo do AgroTech, consegui reduzir o
                      uso de fertilizantes e aumentar minha produção de milho. A
                      tecnologia é simples de usar e mudou minha forma de
                      trabalhar."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm mb-5">
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-md-4 order-md-2">
                <img
                  src="https://i.pinimg.com/736x/68/6a/39/686a39d1c5e9a5452b65c744d418f231.jpg"
                  alt="Aloy"
                  className="img-fluid h-100 object-cover rounded-end"
                />
              </div>
              <div className="col-md-8 order-md-1">
                <div className="p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://i.pinimg.com/736x/16/25/de/1625dedd42fa0127eb5e2aa1f5c23819.jpg"
                      alt="Aloy"
                      className="rounded-circle me-3"
                      width="60"
                    />
                    <div>
                      <h3 className="h4 mb-0">Aloy Bittencourt</h3>
                      <p className="text-muted mb-0">
                        Produtora Rural - Petrolina, PE
                      </p>
                    </div>
                  </div>

                  <h4 className="fw-bold mb-3">Desafio</h4>
                  <p>
                    {" "}
                    Aloy cultivava uvas e mangas para exportação, mas sofria com
                    a falta de tecnologia para identificar áreas de baixa
                    fertilidade e otimizar o uso de defensivos agrícolas, além
                    de dificuldades para acessar informações técnicas.
                  </p>

                  <h4 className="fw-bold mb-3">Solução</h4>
                  <p>
                    Implementou o sistema de Automação de Processos AgroTech,
                    com sensores de umidade, estação meteorológica e o
                    assistente virtual para orientação sobre uso de defensivos e
                    manejo da plantação.
                  </p>

                  <h4 className="fw-bold mb-3">Resultados</h4>
                  <div className="row row-cols-1 row-cols-sm-3 g-3 mb-4">
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">35%</div>
                        <p className="small mb-0">Economia de água</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">28%</div>
                        <p className="small mb-0">
                          Redução no uso de defensivos
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">18%</div>
                        <p className="small mb-0">
                          Melhoria na qualidade das frutas
                        </p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="blockquote border-start border-success border-4 ps-4">
                    <p className="mb-0">
                      "As soluções do AgroTech me ajudaram a identificar áreas
                      com baixa fertilidade no meu terreno. Agora tenho um
                      assistente virtual que me orienta sobre o uso de
                      defensivos e fornece insights valiosos para melhorar minha
                      produção."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://i.pinimg.com/736x/fa/f0/f4/faf0f44bd1278aa858782946313698d5.jpg"
                  alt="Carlos Mendes"
                  className="img-fluid h-100 object-cover rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://i.pinimg.com/736x/d3/50/09/d35009b511ab85d1b4e7393c1a0b3702.jpg"
                      alt="Carlos Mendes"
                      className="rounded-circle me-3"
                      width="60"
                    />
                    <div>
                      <h3 className="h4 mb-0">Mario Bros</h3>
                      <p className="text-muted mb-0">
                        Cooperativista - Chapecó, SC
                      </p>
                    </div>
                  </div>

                  <h4 className="fw-bold mb-3">Desafio</h4>
                  <p>
                    {" "}
                    Mario coordenava uma cooperativa de 35 produtores de leite
                    que enfrentava problemas com a logística e armazenamento dos
                    produtos, resultando em perdas significativas de qualidade e
                    valor durante o transporte.
                  </p>

                  <h4 className="fw-bold mb-3">Solução</h4>
                  <p>
                    Implementou o sistema de Gestão da Cadeia Logística
                    AgroTech, com sensores IoT para monitoramento da temperatura
                    dos tanques e caminhões, além do sistema de rastreamento
                    para otimização das rotas.
                  </p>

                  <h4 className="fw-bold mb-3">Resultados</h4>
                  <div className="row row-cols-1 row-cols-sm-3 g-3 mb-4">
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">25%</div>
                        <p className="small mb-0">
                          Redução nas perdas durante o transporte
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">15%</div>
                        <p className="small mb-0">
                          Redução nos custos de transporte
                        </p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 rounded bg-success bg-opacity-10">
                        <div className="h4 fw-bold text-success mb-0">20%</div>
                        <p className="small mb-0">
                          Aumento no preço médio do leite
                        </p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="blockquote border-start border-success border-4 ps-4">
                    <p className="mb-0">
                      "A gestão logística do AgroTech reduziu nossas perdas
                      durante o transporte em 25%. Os sensores de temperatura e
                      o sistema de rastreamento são excelentes para garantir a
                      qualidade dos produtos e otimizar nossas rotas."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriasDeSuccesso;
