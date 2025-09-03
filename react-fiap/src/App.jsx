import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage";
import Solucoes from "./pages/Solucoes/SolucoesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucoes" element={<Solucoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
