import { USER_CONTACT_LIST } from "../constants/sessionKeys";
import { SUBJECTS_LIST } from "../constants/subjectsList";

/**
 * Exporta dados em formato JSON
 */
export const exportToJSON = (data) => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mensagens_${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Função auxiliar para escapar campos CSV
 */
const escapeCSVField = (value) => {
  if (value === null || value === undefined || value === "") {
    return '""';
  }
  const stringValue = String(value);
  // Se contém vírgula, quebra de linha ou aspas, precisa estar entre aspas
  if (stringValue.includes(",") || stringValue.includes("\n") || stringValue.includes('"')) {
    // Escapar aspas duplicando-as
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  // Sempre colocar entre aspas para consistência
  return `"${stringValue}"`;
};

/**
 * Exporta dados em formato CSV
 * Usa ponto e vírgula como separador para melhor compatibilidade com Excel em português
 */
export const exportToCSV = (data) => {
  if (data.length === 0) {
    alert("Não há dados para exportar");
    return;
  }

  // Cabeçalhos (sempre entre aspas para consistência)
  const headers = [
    escapeCSVField("Nome"),
    escapeCSVField("Email"),
    escapeCSVField("Telefone"),
    escapeCSVField("Localização"),
    escapeCSVField("Assunto"),
    escapeCSVField("Mensagem"),
    escapeCSVField("Data"),
    escapeCSVField("Lida")
  ];
  
  // Linhas de dados
  const rows = data.map((item) => {
    const date = item.date ? new Date(item.date).toLocaleString("pt-BR") : "---";
    const read = item.read ? "Sim" : "Não";
    const subject = SUBJECTS_LIST[item.subject] || item.subject || "Outros";
    
    // Remover quebras de linha da mensagem para evitar problemas
    const message = (item.message || "---").replace(/\r?\n/g, " ").trim();
    
    return [
      escapeCSVField(item.name || "---"),
      escapeCSVField(item.email || "---"),
      escapeCSVField(item.contact || "---"),
      escapeCSVField(item.localization || "---"),
      escapeCSVField(subject),
      escapeCSVField(message),
      escapeCSVField(date),
      escapeCSVField(read),
    ].join(";"); // Usar ponto e vírgula para Excel em português
  });

  const csvContent = [headers.join(";"), ...rows].join("\r\n");
  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;sep=;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mensagens_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Exporta dados em formato XLSX (Excel)
 * Exporta como CSV que o Excel abre perfeitamente
 */
export const exportToXLSX = (data) => {
  // Para Excel, vamos exportar como CSV que abre perfeitamente
  exportToCSV(data);
};

/**
 * Função principal de exportação
 */
export const exportData = (format = "json", filteredData = null) => {
  const data = filteredData || JSON.parse(sessionStorage.getItem(USER_CONTACT_LIST) ?? "[]");
  
  if (data.length === 0) {
    alert("Não há dados para exportar");
    return;
  }

  switch (format.toLowerCase()) {
    case "json":
      exportToJSON(data);
      break;
    case "csv":
      exportToCSV(data);
      break;
    case "xlsx":
      exportToXLSX(data);
      break;
    default:
      exportToJSON(data);
  }
};

