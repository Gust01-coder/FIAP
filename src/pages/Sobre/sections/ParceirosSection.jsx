const ParceirosSection = () => {
  const partners = [
    { name: "Nestlé", logo: "/img/Nestle.png" },
    { name: "Odebrecht", logo: "/img/Odebrecht.png" },
    { name: "Vale", logo: "/img/Vale.png" },
    { name: "Rio", logo: "/img/Rio.jpg" },
    { name: "Santa", logo: "/img/SC.jpg" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossos Parceiros</h2>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            Empresas que acreditam em nossa missão e nos apoiam no
            desenvolvimento de soluções sustentáveis
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-5 g-4 align-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="col text-center">
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="partner-logo img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParceirosSection;
