// import { useState } from "react"

import "./Campo.css"
const Campo = (Props)=> {
    const PlaceHolderModificado = `${Props.placeholder}...`

    //destructuracion
    const {type = "text"} = Props

    const manejarCambio=(e)=>{
        Props.actualizarValor(e.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{Props.titulo}</label>
        {/* <label>{Props.titulo.toUpperCase()}</label> */}
        <input 
            placeholder={PlaceHolderModificado} 
            required={Props.required} 
            value={Props.valor}
            onChange = {manejarCambio}
            type={type}
        />
            
    </div>
}
export default Campo