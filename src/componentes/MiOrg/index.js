// el siguiente import sirve para manejar los estados
// import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props)=> {    
    // const [nombreVariable, funcionQueActualiza] = useState(valorInicial)
    // lo siguiente crea una variable mostrar con el valor inicial true, la cual podemos modificar con la funcion actualizarNombre
    console.log(props)
//     const [mostrar,actualizarMostrar] = useState(true)
// // se crea una conatante para capturar el cambio en mostrar
//     const manejarClick = ()=>{
//         console.log("mostrar/Ocultar elemento",!mostrar)
//         actualizarMostrar(!mostrar)
//     }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg