/* eslint-disable react/prop-types */
import "./formacion.css";
function CardFormacion({ title, subtitle, text }) {
  return (
    <div className="card-formacion">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle">{subtitle}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default CardFormacion;
