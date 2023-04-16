import Colaborador from "../Colaborador"
import "./Equipo.css"
//https://www.npmjs.com/package/hex-to-rgba para usar lo siguiente
import hexToRgba from 'hex-to-rgba';
const Equipo = (props)=>{
    //destructuracion (para no usar tanto props)
    const {colorPrimario, colorSecundario, titulo, id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj={
        //https://www.npmjs.com/package/hex-to-rgba para utilizar de la siguiente manera
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    // console.log(colaboradores.length>0)

    const estiloTitulo = {borderColor: colorPrimario}
    //lo que encierra al section sirve para que solo se muestren las secciones que poseen elementos
    return <>
    { colaboradores.length >0 &&
        <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento)=>{
                    actualizarColor(evento.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index)=> <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={hexToRgba(colorPrimario, 0.6)}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
        </section>
    }
    </>
}
export default Equipo