import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container
      className="w-screen h-screen flex items-center justify-center bg-gray-100"
      fluid
    >
      <Row>
        <Col className="text-center">
          <h1>
            <span className="logo-text">
              Agro<span className="text-success">Tech</span>
            </span>
          </h1>
          <p>Pagina Não Encontrada, redirecionando para a Home...</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
