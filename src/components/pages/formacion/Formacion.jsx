import CardFormacion from "./CardFormacion";
import "./formacion.css";
import Tecnologia from "./tecnologia";
function Formacion() {
  return (
    <>
      <div className="formacion">
        <CardFormacion
          title={"UTN- La Rioja"}
          subtitle={" Tecnico Universitario en programación"}
          text={
            "UTN - Facultad Regional La Rioja Tecnico Universitario en Programacion , Programación informática,aplicaciones específicas·(marzo de 2020 - diciembre de 2023)"
          }
        />
        <CardFormacion
          title={"Polo Tecnologico - La Rioja"}
          subtitle={"MERN Stack Developer"}
          text={
            " Polo Tecnológico La Rioja Desarrollador MERN Stack, Desarrollo de páginas web y recursos informáticos · (agosto de 2024 - diciembre de 2024)"
          }
        />
        <CardFormacion
          title={"Digital House"}
          subtitle={"Full Stack Developer"}
          text={
            " Digital House Desarrollador Full Stack, Desarrollo de páginas web, contenido digital/multimedia y recursos informáticos· (abril de 2024 - noviembre de 2024)"
          }
        />
        <CardFormacion
          title={"UnLaR"}
          subtitle={"Ingenieria Industrial"}
          text={
            "Universidad Nacional de La Rioja Ingeniería, Ingeniería industrial. (2013 - actualidad)"
          }
        />
      </div>
      <h3 className="titulo-tec">Tecnologias y Lenguajes</h3>
      <div className="tecnologias">
        <Tecnologia
          tecnombre={"Javascript"}
          tecimg={"./javascript.png"}
          tecalt={"Javascript"}
        />
        <Tecnologia tecnombre={"HTML"} tecimg={"./html5.png"} tecalt={"HTML"} />
        <Tecnologia tecnombre={"CSS"} tecimg={"./css.png"} tecalt={"CSS"} />
        <Tecnologia
          tecnombre={"React"}
          tecimg={"./react.png"}
          tecalt={"React"}
        />
        <Tecnologia
          tecnombre={"NodeJS"}
          tecimg={"./nodejs.png"}
          tecalt={"Nodejs"}
        />
        <Tecnologia
          tecnombre={"Express"}
          tecimg={"./express.png"}
          tecalt={"Express"}
        />
        <Tecnologia
          tecnombre={"Angular"}
          tecimg={"./angular.png"}
          tecalt={"Angular"}
        />
        <Tecnologia
          tecnombre={"Sequelize"}
          tecimg={"./sequelize.png"}
          tecalt={"Sequelize"}
        />
        <Tecnologia tecnombre={"SQL"} tecimg={"./sql.png"} tecalt={"SQL"} />
      </div>
    </>
  );
}

export default Formacion;
