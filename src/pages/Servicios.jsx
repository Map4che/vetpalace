import "../css/Servicios.css";
import imagen1 from "../images/juego.jpg";
import imagen2 from "../images/piscina.jpg";
import imagen3 from "../images/piscinapelotas.jpg";

const Servicios = () => {
  return (
    <div className="container-servicios">
      <h1 className="title-servicios">SERVICIOS</h1>
      <p className="subtitle-servicios">
        Nuestros alumnos y huespedes disfrutan de...
      </p>
      <div className="contenedor-listas">
        <ul className="lista-servicio">
          <li className="lista-item__servicio lista-item__imagen">COLEGIO</li>
          <li className="lista-item__servicio lista-item__imagen">HOTEL </li>
          <li className="lista-item__servicio lista-item__imagen">
            PASADIA CON ACTIVIDADES GUIADAS
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            CAMINATA ECOLOGICA{" "}
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            PASEO AL RIO
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            AROMATERAPIA
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            MASAJETERAPIA
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            CONSULTAS VETERINARIAS
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            VACUNACION
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            EXAMENES DE RUTINA
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            PISCINA DE PELOTAS
          </li>
          <li className="lista-item__servicio lista-item__imagen">
            PISCINA POR TEMPORADAS
          </li>
        </ul>
        <ul className="lista-servicios__imagenes">
          <li className="lista-item__imagenesServicios">
            <img
              src={imagen1}
              alt=""
              className="imagen-servicios__item imagen1"
            />
          </li>
          <li className="lista-item__imagenesServicios">
            <img
              src={imagen2}
              alt=""
              className="imagen-servicios__item imagen2"
            />
          </li>
          <li className="lista-item__imagenesServicios">
            <img
              src={imagen3}
              alt=""
              className="imagen-servicios__item imagen3"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Servicios;
