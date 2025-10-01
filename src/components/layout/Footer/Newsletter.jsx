import { Col, Form, InputGroup, Button } from "react-bootstrap";
import { validateEmail } from "../../../utils/validateEmail";
import { useEffect, useState } from "react";

const Newsletter = () => {
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [email, setEmail] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) return setIsEmailValid(false);
    setIsEmailValid(true);
    setEmail("");
  };

  useEffect(() => {
    if (isEmailValid === false) {
      const timer = setTimeout(() => {
        setIsEmailValid(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isEmailValid]);

  return (
    <Col lg={3} md={12} className="mt-3 mt-lg-0">
      <h5 className="fw-bold mb-3">Newsletter</h5>
      <p className="small">Receba novidades e atualizações sobre nossos produtos</p>
      <InputGroup className="newsletter-input">
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Seu e-mail"
          className="py-2"
        />
        <Button onClick={clickHandler} variant="success" type="button" className="px-3">
          <i className="bi bi-envelope-check me-1 d-none d-sm-inline"></i>
          Inscrever
        </Button>
      </InputGroup>
      {isEmailValid === true && (
        <div className="alert alert-success mt-2 py-2 small mb-0">
          <i className="bi bi-check-circle me-2"></i>
          Obrigado pela inscrição!
        </div>
      )}
      {isEmailValid === false && (
        <div className="alert alert-danger mt-2 py-2 small mb-0">
          <i className="bi bi-exclamation-triangle me-2"></i>
          Por favor, insira um e-mail válido.
        </div>
      )}
    </Col>
  );
};

export default Newsletter;
