import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FormularioReactivo} from './components/FormularioReactivo'
import {FormularioNoReactivo} from './components/FormularioNoReactivo'
import { DibujarTabla } from './components/DibujarTabla'

function App() {

  const [saludo, setSaludo] = useState("")
  const [dataForm, setDataForm] = useState({
    nombre: "",
    edad: 0
  })
  const [datosFormularioReactivo, setDatosFormularioReactivo]= useState({
    nombre: "",
    edad: 0
  })
  const [datosTabla, setDatosTabla] = useState(
    [
      ["Marco Valdez", 30],
      ["Kevin Lima", 23],
      ["Javier Marroquin", 23]
    ]
  )

  const datosFormularioReactivoHanCambiado = (datos)=>{
    console.log('Datos del formulario han cambiado', datos)
  }
  

  const addElementToTable = ()=>{
    let copy = [...datosTabla]
    copy.push([datosFormularioReactivo.nombre, datosFormularioReactivo.edad])
    setDatosTabla(copy)
  }
  return (
    <>
       <button onClick={()=> {
           setDataForm({
            nombre:"Marco Valdez",
            edad: 20
           })
       }} >Enviar datos al formulario no reactivo</button>
      
       {saludo}
       <FormularioReactivo dataFormHasChanged={(datos)=>{
        setDatosFormularioReactivo(datos)
       }} ></FormularioReactivo>
       <FormularioNoReactivo dataFromParent={dataForm} formDataHasChanged={datosFormularioReactivoHanCambiado}></FormularioNoReactivo>

       <button onClick={addElementToTable} >Agregar elemento a tabla</button>
       <DibujarTabla cabeceras={["Nombre", "Edad"]}
                     datos={datosTabla}
       ></DibujarTabla>
    </>
  ) 
}

export default App
