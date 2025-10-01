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
import UserContact from "./pages/AdminDashboard/UserContact";

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
              <Route index element={<UserContact />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
