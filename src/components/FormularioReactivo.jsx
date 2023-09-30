import { useState } from 'react'
import '../css/Formulario.css'

export const FormularioReactivo = ({dataFormHasChanged})=>{

    const [formValues, setFormValues] = useState({
        nombre: "",
        edad: 0
    })

    const valueHasChanged = (e)=>{
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value
        })
        dataFormHasChanged(
            {
                ...formValues,
                [e.target.name] : e.target.value
            }
        )
    }
    return (
        <form>
            <label className="label" htmlFor="nombre">Nombre</label>
            <input className="input" 
                   name="nombre" 
                   type="text"
                   value={formValues.nombre}
                   onChange={valueHasChanged}
                   ></input>
            <label className="label" htmlFor="nombre">Edad</label>
            <input className="input" 
                   name="edad" 
                   type="text"
                   value={formValues.edad}
                   onChange={valueHasChanged}
                   ></input>
            <input type="submit" 
                   value="Guardar"
                   style={{
                    fontWeight:"bold",
                    padding: "3px",
                    margin: "3px"
                   }}
                   />
           <br/>
            Nombre: {formValues.nombre} <br/>
            Edad: {formValues.edad}
        </form>
    )
}