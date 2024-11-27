import "./listadetrabajos.css";
import Trabajo from "./Trabajo.jsx";
function ListaDeTrabajos() {
  return (
    <>
      <h3>Trabajos Realizados</h3>
      <div className="listaTrabajos-container">
        <Trabajo
          title="Cronometro"
          imgproyecto="cronometro.PNG"
          description="Aplicacion realizada con html css y javascript"
          link="https://cronojavascript.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Contador de Clicks"
          imgproyecto="contadorclics.PNG"
          description="Contador de clicks desarrollado con html css y javascript"
          link="https://contadorclics.netlify.app"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Buscador de Clima de Ciudades"
          imgproyecto="appclima.PNG"
          description="Aplicacion realizada con React, CSS y API externa de clima"
          link="https://react-aplicacion-de-clima.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Calculadora"
          imgproyecto="calculadora.PNG"
          description="Calculadora funcional realizada con React y CSS"
          link="https://calculadoralucasjavascript.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Aplicacion de tareas"
          imgproyecto="appTareas.PNG"
          description="aplicacion realizada con Javascript, HTML Y CSS"
          link="https://listatareasjavascript.netlify.app/"
          link2="link de enlace a la repositorio del trabajo"
        />
        <Trabajo
          title="Mercado liebre"
          imgproyecto="mercadoliebre.png"
          description="Copia de vista principal de Mercado Libre, realizada con HTML Y CSS"
          link="https://ml-lucasbarreramenem.onrender.com/"
          link2="https://github.com/lucasbarrera/ML-LucasBarreraMenem"
        />
      </div>
    </>
  );
}

export default ListaDeTrabajos;
