import { Fragment, useState } from "react"
import { MARCAS,YEARS,PLANES } from "../constants" 
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"


const Formulario = () => {
 const {handleChangeDatos, datos, error, setError} = useCotizador()
 
 const handleSubmit = e=>{
       e.preventDefault()
       console.log('enviando formulario')
       if(Object.values(datos).includes('')){
        setError('todos los campos son obligatorios')
        return
      }
       setError('')

       // TODO: Cotizar
       
 }
  
  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        
         <div className="my-5">
           <label className="block mb-3 font-bold text-gray-400 uppercase ">
           Marca
           </label>
           <select 
           name="marca"
           className="w-full p-3 bg-white border border-gray-200"
           onChange={e=>handleChangeDatos(e)}
           value={datos.marca}
           >
              <option value=''>--Selecciona Marca--</option>
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
           <label className="block mb-3 font-bold text-gray-400 uppercase ">
           Año
           </label>
           <select 
           name="year"
           className="w-full p-3 bg-white border border-gray-200"
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
         <div className="my-5">
           <label className="block mb-3 font-bold text-gray-400 uppercase ">
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
          className='w-full bg-indigo-500 hover:bg-indigo-800 transition-colors  text-white cursor-pointer uppercase font-bold p-3'
          value='Cotizar'
         />
         
      </form>
    </>
  )
}

export default Formulario