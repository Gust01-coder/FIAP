import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Solucoes from "./pages/Solucoes/SolucoesPage";
import Sobre from "./pages/Sobre/SobrePage";
import Casos from "./pages/Casos/CasosPage";
import Contato from "./pages/Contato/ContatoPage";
import Login from "./pages/Login/Login";
import DefaultLayout from "./components/layout/DefaultLayout";
import AdminLayout from "./components/layout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import UserContact from "./pages/AdminDashboard/UserContact";
import Estatisticas from "./pages/AdminDashboard/Estatisticas";
import Atividades from "./pages/AdminDashboard/Atividades";
import Configuracoes from "./pages/AdminDashboard/Configuracoes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/contato" element={<Contato />} />
        </Route>

        <Route element={<AuthProvider />}>
          <Route path="/admin/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="mensagens" element={<UserContact />} />
              <Route path="estatisticas" element={<Estatisticas />} />
              <Route path="atividades" element={<Atividades />} />
              <Route path="configuracoes" element={<Configuracoes />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
