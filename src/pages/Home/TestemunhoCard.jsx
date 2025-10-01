const TestemunhoCard = ({ img, nome, profissao, testemunho }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card testimonial-card h-100">
        <div className="card-body p-4">
          <div className="d-flex align-items-center mb-3">
            <img
              src={img}
              alt="imagem do testemunho"
              className="rounded-circle me-3"
              width="60"
            />
            <div>
              <h5 className="mb-0">{nome}</h5>
              <p className="text-muted mb-0">{profissao}</p>
            </div>
          </div>
          <p className="mb-0">{testemunho}</p>
        </div>
      </div>
    </div>
  );
};

export default TestemunhoCard;
