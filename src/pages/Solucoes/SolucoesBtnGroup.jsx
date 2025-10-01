import { Link } from "react-router-dom";

const SolucoesBtnGroup = () => {
  return (
    <div className="d-flex gap-3">
      <Link to="/contato#top" className="btn btn-success">
        Solicitar demonstração
      </Link>
      <Link to="/casos#top" className="btn btn-outline-success">
        Ver casos de sucesso
      </Link>
    </div>
  );
};

export default SolucoesBtnGroup;
