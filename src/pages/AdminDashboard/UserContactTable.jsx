import { useMemo } from "react";
import { Table, Badge } from "react-bootstrap";
import { USER_CONTACT_LIST } from "../../constants/sessionKeys";
import { treatContactData } from "./utils/treatUserContactData";

const UserContactTable = ({ setSelectedUserContact }) => {
  const userContacts = useMemo(() => {
    const data = JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
    return treatContactData(data);
  }, []);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
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
    return <Badge bg={badge.bg} className="px-2 py-1">{badge.text}</Badge>;
  };

  return (
    <Table hover className="mb-0 admin-table">
      <thead>
        <tr>
          <th className="text-muted small fw-semibold text-uppercase">ID</th>
          <th className="text-muted small fw-semibold text-uppercase">Contato</th>
          <th className="text-muted small fw-semibold text-uppercase">E-mail</th>
          <th className="text-muted small fw-semibold text-uppercase">Localização</th>
          <th className="text-muted small fw-semibold text-uppercase">Assunto</th>
        </tr>
      </thead>
      <tbody>
        {userContacts.length === 0 && (
          <tr>
            <td colSpan={5} className="text-center py-5">
              <div className="text-muted">
                <i className="bi bi-inbox fs-1 d-block mb-2"></i>
                <p className="mb-0">Nenhum contato encontrado</p>
              </div>
            </td>
          </tr>
        )}
        {userContacts.map(
          ({ name, email, localization, subject, contact, message }, index) => (
            <tr
              key={`${name}/${email}`}
              className="admin-table-row"
              onClick={() =>
                setSelectedUserContact({
                  name,
                  email,
                  contact,
                  localization,
                  subject,
                  message,
                })
              }
            >
              <td>
                <span className="text-muted small">#{String(index + 1).padStart(2, '0')}</span>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="admin-avatar me-3">
                    {getInitials(name)}
                  </div>
                  <div>
                    <div className="fw-semibold text-dark">{name}</div>
                    <div className="text-muted small">{contact || 'Sem telefone'}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-dark">{email}</span>
              </td>
              <td>
                <span className="text-muted">{localization || '-'}</span>
              </td>
              <td>
                {getSubjectBadge(subject)}
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default UserContactTable;
