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

    // Buscar os campos do formulário
    const userInput = form.querySelector('input[name="user"]') || form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');
    
    if (!userInput || !passwordInput) {
      console.error('Campos do formulário não encontrados');
      setIsSubmitting(false);
      setInvalidCredentials(true);
      return;
    }
    
    const user = userInput.value.trim();
    const password = passwordInput.value.trim();

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
    <div className="login-page-wrapper">
      <Container
        fluid
        className="d-flex align-items-center justify-content-center position-relative"
        style={{
          minHeight: '100vh',
          backgroundImage: 'url(/img/background_login.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        <Card 
          className="login-card-custom shadow-lg"
          style={{
            maxWidth: '900px',
            width: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            border: 'none',
            position: 'relative',
            zIndex: 1,
            backgroundColor: '#ffffff',
          }}
        >
          <div className="row g-0" style={{ minHeight: '550px' }}>
            {/* Lado Esquerdo - Formulário */}
            <div className="col-md-6 d-flex flex-column justify-content-center p-5" style={{ backgroundColor: '#ffffff' }}>
              <div className="mb-4">
                <h2 className="text-dark mb-2" style={{ fontSize: '2rem', fontWeight: '700' }}>
                  Faça seu login.
                </h2>
              </div>

            {invalidCredentials && (
              <Alert
                variant="warning"
                dismissible
                onClose={() => setInvalidCredentials(false)}
                className="mb-3"
                style={{ backgroundColor: '#ffc107', border: 'none' }}
              >
                Credenciais inválidas.
              </Alert>
            )}

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-dark mb-2 d-block" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                  Usuário
                </label>
                <Form.Control
                  required
                  type="text"
                  name="user"
                  className="login-input-custom"
                  placeholder="admin"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #2E8B57',
                    borderRadius: '10px',
                    color: '#212529',
                    padding: '12px 15px',
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="text-dark mb-2 d-block" style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                  Senha
                </label>
                <Form.Control
                  type="password"
                  required
                  className="login-input-custom"
                  placeholder="••••••••"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #2E8B57',
                    borderRadius: '10px',
                    color: '#212529',
                    padding: '12px 15px',
                  }}
                />
              </div>

              <div className="d-flex justify-content-end mb-4">
                <a 
                  href="#" 
                  className="text-decoration-none"
                  style={{ color: '#2E8B57', fontSize: '0.85rem' }}
                  onClick={(e) => e.preventDefault()}
                >
                  Esqueci minha senha
                </a>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-100 mb-3"
                style={{
                  background: 'linear-gradient(90deg, #2E8B57 0%, #228B22 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  color: '#ffffff',
                }}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>

              <div className="text-center">
                <a 
                  href="#" 
                  className="text-decoration-none"
                  style={{ color: '#2E8B57', fontSize: '0.9rem' }}
                  onClick={(e) => e.preventDefault()}
                >
                  Ainda não tenho uma conta
                </a>
              </div>
            </Form>
          </div>

          {/* Lado Direito - Imagem */}
          <div 
            className="col-md-6 d-none d-md-block"
            style={{
              backgroundImage: 'url(/img/Fundo_login.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              borderRadius: '0 24px 24px 0',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(46, 139, 87, 0.1)',
                borderRadius: '0 24px 24px 0',
              }}
            />
          </div>
        </div>
      </Card>
    </Container>
    </div>
  );
};

export default Login;
