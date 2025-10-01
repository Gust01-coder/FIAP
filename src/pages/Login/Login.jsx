import {
  Stack,
  Container,
  Form,
  Card,
  FloatingLabel,
  Button,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext/useAuth";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validated, setValidated] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { login } = useAuth();

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    setIsSubmitting(true);

    const user = form[0].value;
    const password = form[1].value;

    if (await login({ user, password })) {
      setInvalidCredentials(false);
      setIsSubmitting(false);
      navigate("/admin");
    } else {
      setInvalidCredentials(true);
      setIsSubmitting(false);
      setValidated(false);
    }
  };

  return (
    <Container
      className="w-screen h-screen flex items-center bg-gray-100"
      fluid
    >
      <Card className="max-w-xl w-full mx-auto">
        <Card.Body>
          <Card.Title className="text-center">
            <span className="logo-text">
              Agro<span className="text-success">Tech</span>
            </span>
            Admin
          </Card.Title>
          <Card.Subtitle className="mb-5 text-gray-400 text-center">
            Faça login para continuar
          </Card.Subtitle>

          {invalidCredentials && (
            <Alert
              variant="warning"
              dismissible
              onClose={() => setInvalidCredentials(false)}
              className="mb-3"
            >
              Credencias inválidas.
            </Alert>
          )}

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Usuário"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                placeholder="nome@exemplo.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Senha"
              className="mb-3"
            >
              <Form.Control type="password" required placeholder="senha" />
            </FloatingLabel>
            <Stack className="col-sm-5 mx-auto">
              <Button variant="success" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
