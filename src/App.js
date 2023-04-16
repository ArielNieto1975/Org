// el siguiente import sirve para manejar los estados
import { useState } from 'react';
import { v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario,actualizarMostrar]= useState(false)
  // los elementos que pongo en los corchetes sirven para que no se borren los
  // cards al recargar la pagina, o sea que sean por defecto.
  //si estubieran en un servidoe lo pondria vacio
  const [colaboradores, actualizarColaboradores] = useState([{
          id:uuid(),
          equipo:"Programación",
          foto:"https://github.com/Jeanmariealuralatam.png",
          nombre:"JeanMarie",
          puesto:"Instructora",
          fav: true
  },
  {
          id:uuid(),
          equipo:"Front End",
          foto:"https://github.com/harlandlohora.png",
          nombre:"Harland",
          puesto:"Instructor",
          fav: true
  },
  {
          id:uuid(),
          equipo:"UX y Diseño",
          foto:"https://github.com/genesysaluralatam.png",
          nombre:"Genesys",
          puesto:"Desarrolladora de Sofrware e Instructora",
          fav: true
  },
  {
          id:uuid(),
          equipo:"Programación",
          foto:"https://github.com/christianpva.png",
          nombre:"Christian",
          puesto:"Head de Alura e Instructor",
          fav: false
  },
  {
          id:uuid(),
          equipo:"Innovación y Gestión",
          foto:"https://github.com/JoseDarioGonzalezCha.png",
          nombre:"Jose",
          puesto:"Dev FullStack",
          fav: true
        
  }
])

  const [equipos, actualizarEquipos] = useState([
      {
        id:uuid(),
        titulo:"Programación",
        colorPrimario: "#57C278",
        colorSecundario:"#d9f7e9"
      },
      {
        id:uuid(),
        titulo:"Front End",
        colorPrimario: "#82cffa",
        colorSecundario:"#e8f8ff"
      },
      {
        id:uuid(),
        titulo:"Data Science",
        colorPrimario: "#a6d157",
        colorSecundario:"#f0f8e2"
      },
      {
        id:uuid(),
        titulo:"Devops",
        colorPrimario: "#e06869",
        colorSecundario:"#fde7e8"
      },
      {
        id:uuid(),
        titulo:"UX y Diseño",
        colorPrimario: "#db6ebf",
        colorSecundario:"#fae9f5"
      },
      {
        id:uuid(),
        titulo: "Móvil",
        colorPrimario: "#ffba05",
        colorSecundario:"#fff5d9"
      },
      {
        id:uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#ff8a29",
        colorSecundario:"#ffeedf"
      }
  ]
  )

  // Ternario --> consicion? seMuestra : noSeMuestra
  // otra forma es con Corto Circuito --> condicion && seMuestra
  const cambiarMOstrar=()=> {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador)=>{
      console.log("Nuevo Colaborador",colaborador)
      //spreed opertor
      actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id)=>{
    console.log("Eliminar Colaborator",id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

//Actualizar color de equipo

const actualizarColor= (color, id)=>{
  console.log("Actualizar: ", color,id)
  const equiposActualizados = equipos.map((equipo)=>{
    if (equipo.id === id) {
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

  //Crear Equipo
  const crearEquipo = (nuevoEquipo)=>{
      console.log(nuevoEquipo)
      actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  const like = (id)=>{
    console.log("like",id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id ===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div >
      <Header/>
      {/* {mostrarFormulario ? <Formulario/> : <></>}       */}
      {/* {mostrarFormulario ? <Formulario/> : <div></div>}       */}
      {/* {mostrarFormulario===true ? <Formulario/> : <div></div>}       */}
      {/* con corto circuito */}
      {
        mostrarFormulario && <Formulario
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMOstrar}/>

      {
        equipos.map((equipo)=> <Equipo
        datos={equipo}
        key={equipo.titulo}
        //filter se usa para filtrar y colocar las cards solo en donde corresponden
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor= {actualizarColor}
        like={like}
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
