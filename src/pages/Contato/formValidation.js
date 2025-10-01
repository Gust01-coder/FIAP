const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Por favor, informe seu nome completo";
  } else if (formData.name.trim().split(" ").length < 2) {
    errors.name = "Por favor, informe seu nome completo (nome e sobrenome)";
  }

  if (!formData.email.trim()) {
    errors.email = "Por favor, informe seu e-mail";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Por favor, informe um e-mail válido";
  }

  if (!formData.message.trim()) {
    errors.message = "Por favor, informe sua mensagem";
  }

  if (!formData.privacy) {
    errors.privacy = "Você deve concordar com nossa política de privacidade.";
  }

  return errors;
};
export default validateForm;
