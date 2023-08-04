import "../css/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="contenedor-imagen">
        <img className="imagen-principal" />
      </div>
      <div className="container-video">
        <p className="titulo-parrafo linea-uno">Trabajamos con amor</p>
        <p className="titulo-parrafo">por la salud y el bienestar</p>
        <p className="titulo-parrafo">de tu mascota</p>
        <iframe
          src="https://www.youtube.com/embed/QpUdNqQ5bzk"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          loading="eager"
          className="video"
        ></iframe>
        <p className="texto-inicio">
          <span className="texto">
            Porque tu perrito merece lo mejor, dale momentos únicos al aire
            libre para que se conecte con la naturaleza, socialice con la manada
            y reduzca los niveles de estrés que conlleva la vida en la ciudad,
            en nuestro espacio seguro y bajo el cuidado profesional
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
