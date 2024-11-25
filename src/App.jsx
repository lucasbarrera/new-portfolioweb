import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListaDeTrabajos from "./components/pages/trabajos/ListaDeTrabajos.jsx";
import NavBar from "./components/partials/NavBar.jsx";
import Formacion from "./components/pages/formacion/Formacion.jsx";
import AcercaDeMi from "./components/pages/AcercaDeMi.jsx";
import Footer from "./components/partials/Footer.jsx";
function App() {
  return (
    <>
      <NavBar />{" "}
      <Routes>
        <Route path="/" element={<AcercaDeMi />} />
        <Route path="/trabajos" element={<ListaDeTrabajos />} />
        <Route path="/formacion" element={<Formacion />} />
        <Route path="/*" element={<AcercaDeMi />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
