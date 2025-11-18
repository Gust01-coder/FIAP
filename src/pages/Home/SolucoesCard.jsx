import { Link } from "react-router-dom";

const SolucoesCard = ({ titulo, descricao, ancora }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body text-center p-4">
          <div className="feature-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-4">
            <i className="bi bi-moisture fs-2 text-success"></i>
          </div>
          <h3 className="h4 mb-3">{titulo}</h3>
          <p>{descricao}</p>
          <Link
            to={`solucoes#${ancora}`}
            className="btn btn-outline-success mt-3"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolucoesCard;
