import { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import SliderOverPanelHeader from "./SlideOverPanelHeader";
import { USER_CONTACT_LIST } from "../../../constants/sessionKeys";

function SlideOverPanel({ setSelectedUserContact, selectedUserContact }) {
  const [isRead, setIsRead] = useState(selectedUserContact.read || false);

  const handleMarkAsRead = () => {
    // Atualizar no sessionStorage
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    const updatedData = data.map(contact => 
      contact.email === selectedUserContact.email && contact.name === selectedUserContact.name
        ? { ...contact, read: !isRead }
        : contact
    );
    sessionStorage.setItem(USER_CONTACT_LIST, JSON.stringify(updatedData));
    setIsRead(!isRead);
    
    // Forçar atualização da página
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const getSubjectBadge = (subject) => {
    const badges = {
      'mapeamento': { bg: 'primary', text: 'Mapeamento' },
      'logistica': { bg: 'info', text: 'Logística' },
      'automacao': { bg: 'success', text: 'Automação' },
      'demo': { bg: 'warning', text: 'Demo' },
      'parceria': { bg: 'danger', text: 'Parceria' },
      'outros': { bg: 'secondary', text: 'Outros' }
    };
    const badge = badges[subject] || badges['outros'];
    return <Badge bg={badge.bg}>{badge.text}</Badge>;
  };

  return (
    <div className="fixed inset-0 top-15 overflow-hidden z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={() => setSelectedUserContact(null)}
      ></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl overflow-y-auto">
        <SliderOverPanelHeader
          setSelectedUserContact={setSelectedUserContact}
        />
        <div className="p-4">
          {/* Header with Status */}
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h4 className="fw-bold mb-2">Detalhes da Mensagem</h4>
              {isRead ? (
                <Badge bg="success" className="d-flex align-items-center gap-1" style={{width: 'fit-content'}}>
                  <i className="bi bi-check-circle-fill"></i>
                  Lida
                </Badge>
              ) : (
                <Badge bg="warning" className="d-flex align-items-center gap-1" style={{width: 'fit-content'}}>
                  <i className="bi bi-exclamation-circle-fill"></i>
                  Não lida
                </Badge>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="admin-avatar me-3">
                {selectedUserContact.name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <div>
                <h5 className="mb-0 fw-semibold">{selectedUserContact.name}</h5>
                <span className="text-muted small">{selectedUserContact.contact || 'Sem telefone'}</span>
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-3">
              <div className="mb-3">
                <label className="text-muted small fw-semibold text-uppercase mb-1">E-mail</label>
                <p className="mb-0 text-dark">
                  <i className="bi bi-envelope me-2 text-primary"></i>
                  {selectedUserContact.email}
                </p>
              </div>

              <div className="mb-3">
                <label className="text-muted small fw-semibold text-uppercase mb-1">Localização</label>
                <p className="mb-0 text-dark">
                  <i className="bi bi-geo-alt me-2 text-danger"></i>
                  {selectedUserContact.localization || 'Não informado'}
                </p>
              </div>

              <div>
                <label className="text-muted small fw-semibold text-uppercase mb-1">Assunto</label>
                <div>{getSubjectBadge(selectedUserContact.subject)}</div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-3">
              <label className="text-muted small fw-semibold text-uppercase mb-2">Mensagem</label>
              <p className="mb-0 text-dark" style={{ whiteSpace: 'pre-wrap' }}>
                {selectedUserContact.message}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="d-grid gap-2">
            <Button 
              variant={isRead ? "outline-secondary" : "success"}
              size="lg"
              onClick={handleMarkAsRead}
              className="d-flex align-items-center justify-content-center"
            >
              <i className={`bi ${isRead ? 'bi-x-circle' : 'bi-check-circle'} me-2`}></i>
              {isRead ? 'Marcar como Não Lida' : 'Marcar como Lida'}
            </Button>
            
            <Button 
              variant="outline-primary"
              size="lg"
              href={`mailto:${selectedUserContact.email}`}
              className="d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-reply-fill me-2"></i>
              Responder por E-mail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideOverPanel;
