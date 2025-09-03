import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Solucoes from "./pages/Solucoes/SolucoesPage";
import NavBarContainer from "./components/NavBar/NavBarContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBarContainer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          {/* Rotas comentadas até criar os componentes
            <Route path="/sobre" element={<Sobre />} />
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
