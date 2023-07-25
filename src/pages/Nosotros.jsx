import "../css/Nosotros.css";

const Nosotros = () => {
  return (
    <div className="container-nosotros">
      <h1 className="nosotros-title">Quiénes Somos?</h1>
      <p className="caja-nosotros">
        <span className="nosotros-texto">
          Somos una empresa creada por medicos veterinarios, desde el 2013, que
          tiene como objetivo brindar a los peludos espacios seguros para tener
          días de diversión, desarrollando sus capacidades físicas y sociales,
          estimulando sus habilidades emocionales y cognitivas, conectandolos
          con la naturaleza en actividades guíadas bajo el cuidado profesional
          de medicos veterinarios y personal capacitado para ofrecer el mejor
          cuidado a los consentidos de la casa{" "}
        </span>
      </p>
      <div className="nosotros-fotos"></div>
      <div className="nosotros-beneficios"></div>
    </div>
  );
};

export default Nosotros;
