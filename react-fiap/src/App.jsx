import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Solucoes from "./pages/Solucoes/SolucoesPage";
import NavBarContainer from "./components/layout/NavBar/NavBarContainer";
import Footer from "./components/layout/Footer";
import SobreNosPage from "./pages/SobreNos/SobreNosPage";

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/sobre" element={<SobreNosPage />} />
          {/* Rotas comentadas até criar os componentes
            <Route path="/casos" element={<Casos />} />
            <Route path="/contato" element={<Contato />} />
            */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
