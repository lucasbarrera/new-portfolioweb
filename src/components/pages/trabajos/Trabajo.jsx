/* eslint-disable react/prop-types */
import "./trabajo.css";
function Trabajo({ title, imgproyecto, description, link, link2 }) {
  return (
    <>
      <div className="card">
        <img src={imgproyecto} className="img-trabajo" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="trabajo-botones-container">
            <a
              className="btn btn-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar Pagina
            </a>
            <a href={link2} className="btn btn-warning">
              Visitar Repositorio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trabajo;
