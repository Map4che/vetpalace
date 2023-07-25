import "../css/Footer.css";
import Arroba from "../images/arroba.png";
import Telefono from "../images/telefono.png";
import Ubicacion from "../images/ubicacion.png";
import facebook from "../images/Redes/facebook.jpg";
import instagram from "../images/Redes/instagram.jpg";
import tiktok from "../images/Redes/tiktok.jpg";
import youtube from "../images/Redes/youtube.jpg";
import whatsapp from "../images/Redes/whatsapp.jpg";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="info-footer">
        <h1 className="title-footer">Vet Palace Resort</h1>
        <p className="texto-footer">
          Un lugar especial hecho para ellos, donde podrán correr, jugar,
          socializar , divertirse y aprender. Somos un equipo especializado en
          el cuidado y bienestar de las mascotas, listo para que puedas estar
          tranquilo cuando esté a nuestro cuidado.
        </p>
      </div>
      <div className="info-contacto">
        <h1 className="title-contacto">Contáctanos</h1>
        <ul className="lista-contacto">
          <li className="lista-contacto__item">
            <img src={Arroba} alt="" className="iconos-lista" />
            <p className="info-contacto__email">vetpalace@hotmail.com</p>
          </li>
          <li className="lista-contacto__item">
            <img src={Telefono} alt="" className="iconos-lista" />
            <p className="info-contacto__numero">3005564759</p>
          </li>
          <li className="lista-contacto__item">
            <img src={Ubicacion} alt="" className="iconos-lista" />
            <p className="info-contacto__direccion">
              Vereda San Jorge, Zipaquirá, Cundinamarca
            </p>
          </li>
        </ul>
      </div>
      <div className="redes-sociales">
        <a href="https://www.facebook.com/vetpalacecolombia" target="_blank">
          <img
            src={facebook}
            alt=""
            className="logo-footer logo-facebook"
            href="www.facebook.com/vetpalacecolombia"
          />
        </a>
        <a href="https://www.instagram.com/vetpalace" target="_blank">
          <img src={instagram} alt="" className="logo-footer logo-instagram" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=573005564759"
          target="_blank"
        >
          <img src={whatsapp} alt="" className="logo-footer logo-whatsApp" />
        </a>
        <a href="https://www.tiktok.com/@vetpalace" target="_blank">
          <img src={tiktok} alt="" className="logo-footer logo-tiktok" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC6kWevR3QW26MeCEAZPf9bg"
          target="_blank"
        >
          <img src={youtube} alt="" className="logo-footer logo-youtube" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
