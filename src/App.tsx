import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Linktree from "./pages/Linktree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota 1: Mostra a MainPage em "/" */}
        <Route path="/" element={<MainPage />} />

        {/* Rota 2: Mostra a MainPage em "/e-book-equilibrio-hormonal" */}
        <Route path="/e-book-equilibrio-hormonal" element={<MainPage />} />

        {/* Rota 3: Mostra o Linktree em "/linktree" */}
        <Route path="/linktree" element={<Linktree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
