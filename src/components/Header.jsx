import { Link } from "react-router-dom";
import Logo from "../images/Vinilo.jpg";
import "../css/Header.css";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
    /*if (!isActive) {
      setIsActive(isActive);
    } else {
      setIsActive(!isActive);
    }*/
    console.log("Boton");
  };

  return (
    <header className="encabezado">
      <div className="container-hamburger">
        <div className="hamburguer" onClick={toggleClass}></div>
      </div>
      <div className="container-logo">
        <img src={Logo} alt="Logo" className="logo-vetpalace" />
      </div>
      <nav className="container-lista">
        <ul className={`lista ${isActive ? "vista-menu" : ""}`}>
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
