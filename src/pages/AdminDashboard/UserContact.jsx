import { Container, Card, InputGroup, Form, Button } from "react-bootstrap";
import { useState, useMemo } from "react";
import UserContactTable from "./UserContactTable";
import SlideOverPanel from "../../components/layout/SlideOverPanel/SlideOverPanel";
import { exportData } from "../../utils/exportData";
import { USER_CONTACT_LIST } from "../../constants/sessionKeys";

const UserContact = () => {
  const [selectedUserContact, setSelectedUserContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const allData = useMemo(() => {
    return JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
  }, []);

  const handleExport = () => {
    // Obter formato preferido das configurações ou usar JSON como padrão
    const settings = JSON.parse(localStorage.getItem("adminSettings") ?? "{}");
    const format = settings.exportFormat || "json";
    
    // Filtrar dados se houver busca
    let dataToExport = allData;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      dataToExport = allData.filter((item) => {
        return (
          (item.name || "").toLowerCase().includes(term) ||
          (item.email || "").toLowerCase().includes(term) ||
          (item.message || "").toLowerCase().includes(term) ||
          (item.localization || "").toLowerCase().includes(term)
        );
      });
    }
    
    exportData(format, dataToExport);
  };
  
  return (
    <>
      <div className="admin-dashboard">
        <Container fluid className="px-3 px-md-4 py-3 py-md-4">
          {/* Header */}
          <div className="mb-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
              <div>
                <h1 className="h3 fw-bold text-dark mb-2">Mensagens</h1>
                <p className="text-muted mb-0">Gerencie todas as mensagens recebidas</p>
              </div>
              <div className="w-100 w-md-auto">
                <InputGroup className="w-100" style={{ maxWidth: '100%' }}>
                  <InputGroup.Text className="bg-white border-end-0">
                    <i className="bi bi-search text-muted"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Buscar mensagens..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-start-0"
                  />
                </InputGroup>
              </div>
            </div>
          </div>

          {/* Table Card */}
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-0 p-3 p-md-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                <div>
                  <h5 className="fw-bold mb-1">Todas as Mensagens</h5>
                  <p className="text-muted small mb-0 d-none d-md-block">Clique em uma linha para ver detalhes</p>
                </div>
                <Button 
                  variant="outline-success" 
                  size="sm" 
                  className="w-100 w-md-auto"
                  onClick={handleExport}
                >
                  <i className="bi bi-download me-2"></i>
                  <span className="d-none d-sm-inline">Exportar</span>
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <UserContactTable 
                  setSelectedUserContact={setSelectedUserContact} 
                  searchTerm={searchTerm}
                />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
      
      {selectedUserContact && (
        <SlideOverPanel
          setSelectedUserContact={setSelectedUserContact}
          selectedUserContact={selectedUserContact}
        />
      )}
    </>
  );
};

export default UserContact;
