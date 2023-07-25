import Whats from "../images/whatsapp.png";
import "../css/Whats.css";

const WhatsApp = () => {
  return (
    <div className="container-whatsapp">
      <a
        href="https://api.whatsapp.com/send?phone=573005564759"
        target="_blank"
      >
        <img src={Whats} alt="" className="logo-whatsapp" />
      </a>
    </div>
  );
};

export default WhatsApp;
