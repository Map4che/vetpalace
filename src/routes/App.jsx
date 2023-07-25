import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";
import Planes from "../pages/Planes";
import Galeria from "../pages/Galeria";
import Ubicacion from "../pages/Ubicacion";
import Footer from "../components/Footer";
import Whats from "../components/WhatsApp";
import "../css/App.css";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/nosotros" exact element={<Nosotros />} />
          <Route path="/servicios" exact element={<Servicios />} />
          <Route path="/planes" exact element={<Planes />} />
          <Route path="/galeria" exact element={<Galeria />} />
          <Route path="/ubicacion" exact element={<Ubicacion />} />
        </Routes>
        <Footer />
        <Whats />
      </>
    </Router>
  );
}

export default App;
