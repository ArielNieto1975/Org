import "./ListaOpciones.css"

const ListaOpciones = (props)=> {
    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y Gestión"
    // ]

    const manejarCambio = (e)=> {
        console.log("cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/* este opcion es para que el select no muestre por defecto la primera opcion */}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
           {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}

        </select>
    </div>
}
export default ListaOpciones