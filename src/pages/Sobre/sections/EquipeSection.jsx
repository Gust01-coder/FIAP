const EquipeSection = () => {
  const teamMembers = [
    {
      name: "Arthur Souza",
      role: "Desenvolvedor Full Stack",
      image: "/img/Arthur Souza.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Caio Dias",
      role: "Desenvolvedor Front-end",
      image: "/img/Caio Dias.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Gabriel Lincoln",
      role: "Desenvolvedor Back-end",
      image: "/img/Gabriel Lincoln.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Gustavo Santos",
      role: "Desenvolvedor Mobile",
      image: "/img/Gustavo_Santos.png",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Vinicius Costa",
      role: "Desenvolvedor DevOps",
      image: "/img/Vinicius Costa.png",
      linkedin: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Nossa Equipe</h2>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            Conheça os desenvolvedores apaixonados por tecnologia que tornaram o
            AgroTech uma realidade
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col">
              <div className="card team-card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="fw-bold mb-2">{member.name}</h5>
                  <p className="text-muted mb-3">{member.role}</p>
                  <div className="social-links">
                    <a
                      href={member.linkedin}
                      className="me-3 text-decoration-none text-secondary"
                    >
                      <i className="bi bi-linkedin fs-5"></i>
                    </a>
                    <a
                      href={member.github}
                      className="text-decoration-none text-secondary"
                    >
                      <i className="bi bi-github fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
