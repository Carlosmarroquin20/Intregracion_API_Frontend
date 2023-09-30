import { useState } from 'react'
import '../css/Formulario.css'

export const FormularioNoReactivo = ({dataFromParent, formDataHasChanged})=>{

    const [formValues, setFormValues] = useState({
        nombre: "",
        edad: 0
    })

    const onFormSubmit = (e)=>{
        e.preventDefault()
        let dataForm = new FormData(e.target);

        setFormValues({
            nombre: dataForm.get("nombre"),
            edad: dataForm.get("edad")
        })

        formDataHasChanged({
            nombre: dataForm.get("nombre"),
            edad: dataForm.get("edad")
        })

    }

    return (

        <form onSubmit={onFormSubmit}>
            <label className="label" htmlFor="nombre">Nombre</label>
            <input className="input" 
                   name="nombre" 
                   type="text"
                   ></input>
            <label className="label" htmlFor="nombre">Edad</label>
            <input className="input" 
                   name="edad" 
                   type="text"
                   ></input>
            <input type="submit" value="Guardar"/>
            <br/>
            Nombre: {formValues.nombre} <br/>
            Edad: {formValues.edad}

            <br/>
            Nombre desde el padre: {dataFromParent.nombre} <br/>
            Edad desde el padre: {dataFromParent.edad}
        </form>
    )
}