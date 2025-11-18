import { Container, Card, Form, Button, Row, Col, Alert, Badge } from "react-bootstrap";
import { useState } from "react";
import { exportData } from "../../utils/exportData";
import { USER_CONTACT_LIST } from "../../constants/sessionKeys";

const Configuracoes = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    autoRead: false,
    exportFormat: "json",
    itemsPerPage: 10,
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    // Simular salvamento
    localStorage.setItem("adminSettings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleExportData = () => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    exportData(settings.exportFormat, data);
  };

  const handleClearCache = () => {
    if (window.confirm("Tem certeza que deseja limpar o cache? Isso não afetará os dados das mensagens.")) {
      localStorage.removeItem("adminSettings");
      window.location.reload();
    }
  };

  const handleClearAllMessages = () => {
    if (window.confirm("Tem certeza que deseja limpar TODAS as mensagens? Esta ação não pode ser desfeita!")) {
      sessionStorage.removeItem(USER_CONTACT_LIST);
      window.location.reload();
    }
  };

  return (
    <div className="admin-dashboard">
      <Container fluid className="px-4 py-4">
        <div className="mb-4">
          <h1 className="h3 fw-bold text-dark mb-2">Configurações</h1>
          <p className="text-muted mb-0">Gerencie as preferências do painel administrativo</p>
        </div>

        {saved && (
          <Alert variant="success" dismissible onClose={() => setSaved(false)}>
            <i className="bi bi-check-circle me-2"></i>
            Configurações salvas com sucesso!
          </Alert>
        )}

        <Row className="g-4">
          <Col lg={8}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 p-4">
                <h5 className="fw-bold mb-0">Notificações</h5>
              </Card.Header>
              <Card.Body className="p-4">
                <Form>
                  <Form.Check
                    type="switch"
                    id="notifications"
                    label="Ativar notificações"
                    checked={settings.notifications}
                    onChange={(e) => handleChange("notifications", e.target.checked)}
                    className="mb-3"
                  />
                  <Form.Check
                    type="switch"
                    id="emailAlerts"
                    label="Alertas por e-mail"
                    checked={settings.emailAlerts}
                    onChange={(e) => handleChange("emailAlerts", e.target.checked)}
                    className="mb-3"
                  />
                  <Form.Check
                    type="switch"
                    id="autoRead"
                    label="Marcar mensagens como lidas automaticamente"
                    checked={settings.autoRead}
                    onChange={(e) => handleChange("autoRead", e.target.checked)}
                  />
                </Form>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 p-4">
                <h5 className="fw-bold mb-0">Preferências de Exibição</h5>
              </Card.Header>
              <Card.Body className="p-4">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Itens por página</Form.Label>
                    <Form.Select
                      value={settings.itemsPerPage}
                      onChange={(e) => handleChange("itemsPerPage", parseInt(e.target.value))}
                    >
                      <option value={10}>10 itens</option>
                      <option value={25}>25 itens</option>
                      <option value={50}>50 itens</option>
                      <option value={100}>100 itens</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Formato de exportação padrão</Form.Label>
                    <Form.Select
                      value={settings.exportFormat}
                      onChange={(e) => handleChange("exportFormat", e.target.value)}
                    >
                      <option value="json">JSON</option>
                      <option value="csv">CSV</option>
                      <option value="xlsx">Excel (XLSX)</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>

            <div className="d-flex justify-content-end">
              <Button variant="success" onClick={handleSave}>
                <i className="bi bi-save me-2"></i>
                Salvar Configurações
              </Button>
            </div>
          </Col>

          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0 p-4">
                <h5 className="fw-bold mb-0">Informações do Sistema</h5>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="mb-3">
                  <small className="text-muted d-block">Versão</small>
                  <strong>1.0.0</strong>
                </div>
                <div className="mb-3">
                  <small className="text-muted d-block">Última atualização</small>
                  <strong>{new Date().toLocaleDateString("pt-BR")}</strong>
                </div>
                <div>
                  <small className="text-muted d-block">Status</small>
                  <Badge bg="success">Online</Badge>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-0 p-4">
                <h5 className="fw-bold mb-0">Ações Rápidas</h5>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="d-grid gap-2">
                  <Button variant="outline-primary" size="sm" onClick={handleExportData}>
                    <i className="bi bi-download me-2"></i>
                    Exportar Dados
                  </Button>
                  <Button variant="outline-secondary" size="sm" onClick={handleClearCache}>
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Limpar Cache
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={handleClearAllMessages}>
                    <i className="bi bi-trash me-2"></i>
                    Limpar Todas as Mensagens
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Configuracoes;

