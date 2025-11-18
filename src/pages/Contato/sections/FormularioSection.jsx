import { useState } from "react";
import validateForm from "../formValidation";
import { USER_CONTACT_LIST } from "../../../constants/sessionKeys";

const defaultFormValue = {
  name: "",
  email: "",
  contact: "",
  localization: "",
  subject: "outros",
  message: "",
  privacy: false,
};

const FormularioSection = () => {
  const [formData, setFormData] = useState(defaultFormValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpar erro do campo quando usuário começa a digitar
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          const list = sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]";
          let parsedList = JSON.parse(list);
          
          // Adicionar campos necessários para o painel admin
          const contactData = {
            ...formData,
            date: new Date().toISOString(),
            read: false,
            id: Date.now().toString()
          };
          
          sessionStorage.setItem(
            USER_CONTACT_LIST,
            JSON.stringify([...parsedList, contactData])
          );
          resolve();
        }, 2000)
      );
      setSubmitSuccess(true);
      setFormData(defaultFormValue);
      setFormErrors({});
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckedChange = (e) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Entre em contato</h2>
            <p className="mb-4">
              Preencha o formulário abaixo e entraremos em contato o mais breve
              possível. Estamos ansiosos para conhecer sua propriedade e ajudar
              a otimizar sua produção.
            </p>

            {submitSuccess && (
              <div className="alert alert-success" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formErrors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">{formErrors.name}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">{formErrors.email}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="contact" className="form-label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    name="contact"
                    placeholder="(00) 00000-0000"
                    value={formData.contact}
                    onChange={handleInputChange}
                  />
                  <div className="form-text">Campo opcional</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="localization" className="form-label">
                    Cidade/Estado
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="localization"
                    name="localization"
                    placeholder="Ex: Belo Horizonte/MG"
                    value={formData.localization}
                    onChange={handleInputChange}
                  />
                  <div className="form-text">Campo opcional</div>
                </div>

                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Assunto
                  </label>
                  <select
                    className="form-select"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    id="subject"
                  >
                    <option value="outros">
                      Selecione uma opção (opcional)
                    </option>
                    <option value="mapeamento">Mapeamento do Solo</option>
                    <option value="logistica">
                      Gestão da Cadeia Logística
                    </option>
                    <option value="automacao">Automação de Processos</option>
                    <option value="demo">Agendar Demonstração</option>
                    <option value="parceria">Proposta de Parceria</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Descrição da mensagem *
                  </label>
                  <textarea
                    className={`form-control ${
                      formErrors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Descreva sua mensagem aqui... (mínimo 30 caracteres, máximo 500 caracteres)"
                  ></textarea>
                  <div className="invalid-feedback">{formErrors.message}</div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="newsletter"
                    />
                    <label className="form-check-label" htmlFor="newsletter">
                      Desejo receber novidades e atualizações por e-mail
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className={`form-check-input ${
                        formErrors.privacy ? "is-invalid" : ""
                      }`}
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      onChange={handleCheckedChange}
                      checked={formData.privacy}
                      required
                    />
                    <label className="form-check-label" htmlFor="privacy">
                      Concordo com a{" "}
                      <a href="#" className="text-success">
                        Política de Privacidade
                      </a>{" "}
                      *
                    </label>
                    <div className="invalid-feedback">
                      Você deve concordar com nossa política de privacidade.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 w-sm-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Informações de contato</h3>

                <div className="d-flex mb-4">
                  <div className="contact-icon bg-success bg-opacity-10 me-3">
                    <i className="bi bi-geo-alt text-success"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Endereço</h5>
                    <p className="mb-0">
                      Av. Amazonas, 5253 - Nova Suíça
                      <br />
                      Belo Horizonte, MG, 30421-169
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="contact-icon bg-success bg-opacity-10 me-3">
                    <i className="bi bi-telephone text-success"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Telefone</h5>
                    <p className="mb-0">(31) 9999-9999</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="contact-icon bg-success bg-opacity-10 me-3">
                    <i className="bi bi-envelope text-success"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">E-mail</h5>
                    <p className="mb-0">contato@agrotech.com.br</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="contact-icon bg-success bg-opacity-10 me-3">
                    <i className="bi bi-clock text-success"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Horário de atendimento</h5>
                    <p className="mb-0">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>

                <h4 className="fw-bold mt-5 mb-3">
                  Nos siga nas redes sociais
                </h4>
                <div className="d-flex gap-3 social-icons flex-wrap">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="bi bi-facebook fs-4"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="bi bi-instagram fs-4"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="bi bi-twitter fs-4"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="bi bi-linkedin fs-4"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <i className="bi bi-youtube fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioSection;
