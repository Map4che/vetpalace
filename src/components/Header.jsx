import { Link } from "react-router-dom";
import Logo from "../images/Vinilo.jpg";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="encabezado">
      <div className="container-logo">
        <img src={Logo} alt="Logo" className="logo-vetpalace" />
      </div>
      <nav className="contenedor-lista">
        <ul className="lista">
          <li className="lista-item">
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li className="lista-item">
            {" "}
            <Link to="/nosotros" className="link">
              Nosotros
            </Link>
          </li>
          <li className="lista-item">
            {" "}
            <Link to="/servicios" className="link">
              Servicios
            </Link>
          </li>
          <li className="lista-item">
            {" "}
            <Link to="/planes" className="link">
              Planes
            </Link>
          </li>
          <li className="lista-item">
            {" "}
            <Link to="/galeria" className="link">
              Galeria
            </Link>
          </li>
          <li className="lista-item">
            {" "}
            <Link to="/ubicacion" className="link">
              Ubicación
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
