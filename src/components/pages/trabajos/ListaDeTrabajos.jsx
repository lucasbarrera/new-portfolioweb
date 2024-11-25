import "./listadetrabajos.css";
import Trabajo from "./Trabajo";
function ListaDeTrabajos() {
  return (
    <>
      <h3>Trabajos Realizados</h3>
      <div className="listaTrabajos-container">
        <Trabajo
          title="Cronometro"
          imgproyecto="/src/assets/cronometro.png"
          description="Aplicacion realizada con html css y javascript"
          link="https://cronojavascript.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Contador de Clicks"
          imgproyecto="/src/assets/contadorclics.png"
          description="Contador de clicks desarrollado con html css y javascript"
          link="https://contadorclics.netlify.app"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Buscador de Clima de Ciudades"
          imgproyecto="/src/assets/appclima.png"
          description="Aplicacion realizada con React, CSS y API externa de clima"
          link="https://react-aplicacion-de-clima.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Calculadora"
          imgproyecto="/src/assets/calculadora.png"
          description="Calculadora funcional realizada con React y CSS"
          link="https://calculadoralucasjavascript.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Aplicacion de tareas"
          imgproyecto="/src/assets/appTareas.png"
          description="aplicacion realizada con Javascript, HTML Y CSS"
          link="https://listatareasjavascript.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Mercado liebre"
          imgproyecto="/src/assets/mercadoliebre.png"
          description="Copia de vista principal de Mercado Libre, realizada con HTML Y CSS"
          link="https://ml-lucasbarreramenem.onrender.com/"
          link2="https://github.com/lucasbarrera/ML-LucasBarreraMenem"
        />
      </div>
    </>
  );
}

export default ListaDeTrabajos;