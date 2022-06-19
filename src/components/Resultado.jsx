import React, { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants' 

const Resultado = () => {

    const {resultadoState, datos} = useCotizador()
    const {marca, plan, year} = datos
    
    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)),[resultadoState]) 
    // no hace el reRender mientras el resultadoState no cambie (parecido a useEffect)
    // o lo que es lo mismo, la funcion filter no se va a ejecutar mientras el state no camibie.

    const [nombrePlan] = useMemo(()=>PLANES.filter(m => m.id === Number(plan)),[resultadoState])
    // useMemo es una variante del anterior y hace lo mismo. Solo que cambia la sintaxis.

    const yearRef = useRef(year)        


    if (resultadoState === 0) return null  
 
    return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
       <h2 className='text-gray-600 font-black text-3xl '>Resumen</h2>
       <p className='my-2 '>
        <span className='font-bold'>Tipo de Vehículo: </span>
        {nombreMarca.nombre}
      </p>   
      <p className='my-2 '>
        <span className='font-bold'>Modalidad: </span>
        {nombrePlan.nombre}
      </p> 
      <p className='my-2 '>
        <span className='font-bold'>Año de matriculación: </span>
        {yearRef.current}
      </p> 
      <p className='my-2 text-2xl '>
        <span className='font-bold'>Precio Total: </span>
        {resultadoState}
      </p> 
    </div>
  )
}

export default Resultado