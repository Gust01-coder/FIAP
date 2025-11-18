import { Container, Card, Badge } from "react-bootstrap";
import { useMemo } from "react";
import { USER_CONTACT_LIST } from "../../constants/sessionKeys";

const Atividades = () => {
  const activities = useMemo(() => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    
    return data
      .map((contact, index) => ({
        id: contact.id || `activity-${index}`,
        type: "mensagem",
        action: "Nova mensagem recebida",
        user: contact.name,
        email: contact.email,
        subject: contact.subject,
        date: contact.date || new Date().toISOString(),
        read: contact.read || false,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 50); // Últimas 50 atividades
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Agora";
    if (minutes < 60) return `${minutes} min atrás`;
    if (hours < 24) return `${hours}h atrás`;
    if (days < 7) return `${days} dias atrás`;
    return date.toLocaleDateString("pt-BR");
  };

  const getSubjectBadge = (subject) => {
    const badges = {
      mapeamento: { bg: "primary", text: "Mapeamento" },
      logistica: { bg: "info", text: "Logística" },
      automacao: { bg: "success", text: "Automação" },
      demo: { bg: "warning", text: "Demo" },
      parceria: { bg: "danger", text: "Parceria" },
      outros: { bg: "secondary", text: "Outros" },
    };
    const badge = badges[subject] || badges.outros;
    return <Badge bg={badge.bg}>{badge.text}</Badge>;
  };

  return (
    <div className="admin-dashboard">
      <Container fluid className="px-4 py-4">
        <div className="mb-4">
          <h1 className="h3 fw-bold text-dark mb-2">Atividades Recentes</h1>
          <p className="text-muted mb-0">Histórico de todas as atividades do sistema</p>
        </div>

        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-0 p-4">
            <h5 className="fw-bold mb-0">Timeline de Atividades</h5>
          </Card.Header>
          <Card.Body className="p-0">
            <div className="activity-timeline">
              {activities.length === 0 ? (
                <div className="text-center py-5 text-muted">
                  <i className="bi bi-inbox fs-1 d-block mb-2"></i>
                  <p className="mb-0">Nenhuma atividade registrada</p>
                </div>
              ) : (
                activities.map((activity, index) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-indicator"></div>
                    <div className="activity-content">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h6 className="fw-semibold mb-1">
                            {activity.action}
                          </h6>
                          <p className="text-muted small mb-1">
                            <strong>{activity.user}</strong> ({activity.email})
                          </p>
                          <div className="mb-2">
                            {getSubjectBadge(activity.subject)}
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-muted small">
                            {formatDate(activity.date)}
                          </span>
                          {!activity.read && (
                            <Badge bg="warning" className="ms-2">Nova</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Atividades;

