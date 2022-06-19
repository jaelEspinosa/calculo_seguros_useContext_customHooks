import { Fragment, useState } from "react"
import { MARCAS,YEARS,PLANES } from "../constants" 
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"
import styles from '../styles/Error.module.css'

const Formulario = () => {
 const {handleChangeDatos, datos, error, setError,cotizarSeguro,setResultadoState,resultadoState} = useCotizador()
 
 const handleSubmit = e=>{
       e.preventDefault()
       console.log('enviando formulario')
       if(Object.values(datos).includes('')){
        setError('todos los campos son obligatorios')
        return
      }
       setError('')
     
      cotizarSeguro()
       
 }
  
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        
         <div className="my-5">
           <label className="block mb-3 font-bold text-gray-800 uppercase ">
           Clase
           </label>
           <select 
           name="marca"
           className={`w-full p-3 bg-white border border-gray-200 rounded-xl ${styles.error}`}
           onChange={e=>handleChangeDatos(e)}
           value={datos.marca}
           >
              <option value=''>--Selecciona clase--</option>
              {MARCAS.map(marca => (
                <option
                 name='marca'
                 value={marca.id}
                 key={marca.id}
                 >{marca.nombre}
                 </option>
              ))}
           </select> 
           

         </div>
         <div className="my-5">
           <label className="block mb-3 font-bold text-gray-800 uppercase ">
           Año matriculación
           </label>
           <select 
           name="year"
           className={`w-full p-3 bg-white border border-gray-200 rounded-xl  ${styles.error}`}
           onChange={e=>handleChangeDatos(e)}
           value={datos.year}
           >
              <option value=''>--Selecciona Año--</option>
              {YEARS.map(year => (
                <option
                 value={year}
                 key={year}
                 >{year}
                 </option>
              ))}
           </select> 
         </div>
         <div className={`my-10 mt-16 border border-gray-200 rounded-xl p-5 ${styles.error}`}>
           <label className="block mb-3 font-bold text-gray-800 uppercase ">
           Elije Modalidad
           </label>
           <div className="flex gap-3 items-center">
           {PLANES.map(plan=>(
            <Fragment key={plan.id}>
                <label className="hover:cursor-pointer" htmlFor={plan.nombre}>{plan.nombre} </label>
                <input 
                id={plan.nombre}
                name="plan"
                value={plan.id}
                type='radio'
                  onChange={e=>handleChangeDatos(e)}
                /> 
               
            </Fragment>
           ))}
           </div>
         </div>
         <input 
          type='submit'
          className='w-full bg-indigo-500 hover:bg-indigo-800 transition-colors  text-white cursor-pointer uppercase font-bold p-3 rounded-xl shadow-xl shadow-black'
          value='Calcular'
         />
         
      </form>
    </>
  )
}

export default Formulario