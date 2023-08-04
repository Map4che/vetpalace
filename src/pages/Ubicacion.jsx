import "../css/Mapa.css";

const Ubicacion = () => {
  return (
    <div className="container-mapa">
      <h1 className="mapa-title">Zipáquira Colombia</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8837.438127977684!2d-74.06196524964449!3d4.987370617758388!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1689467554486!5m2!1ses!2sco"
        style={{ border: "0" }}
        loading="lazy"
        className="mapa"
      ></iframe>
    </div>
  );
};

export default Ubicacion;
