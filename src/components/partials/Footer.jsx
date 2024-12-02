import "./footer.css";
function Footer() {
  return (
    <div className="footercontainer">
      <a
        href="mailto:barreramenemlucas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="seccion">
          <img className="icon" src="./mailicono.png" alt="Mail" />
          e-mail
        </div>
      </a>
      <a
        href="https://linkedin.com/in/lucas-barrera-menem-2775b5218"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="seccion">
          <img className="icon" src="./linkedinicono.png" alt="Linkedin" />
          Mi Perfil
        </div>
      </a>
      <a
        href="https://portafolio-lucasbarreramenem.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="seccion">
          <img className="icon " src="./webicono.png" alt="portafolio web" />
          Portafolio Web
        </div>
      </a>
      <a
        href="https://drive.google.com/file/d/11JKUcAcWR607ZsjAPRBduy_EU8oWVWVW/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="seccion">
          <img className="icon" src="./cvicono.png" alt="CV" />
          Curriculum Vitae
        </div>
      </a>
      <a
        href="https://github.com/lucasbarrera"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="seccion">
          <img className="icon" src="./githubicon.png" alt="Github" />
          Repositorio
        </div>
      </a>
      <div className="seccion">
        <img className="icon" src="./telefonoicono.png" alt="telefono" />
        <p>+54 3084357815</p>
      </div>
    </div>
  );
}

export default Footer;
