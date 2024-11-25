/* eslint-disable react/prop-types */
function Tecnologia({ tecnombre, tecimg, tecalt }) {
  return (
    <div className="tec-contenedor">
      <img className="tec-img" src={tecimg} alt={tecalt} />
      <p className="tec-nombre">{tecnombre}</p>
    </div>
  );
}

export default Tecnologia;
