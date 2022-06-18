import { createContext, useState } from 'react'
import { obtenerDirerenciaYear,calcularMarca,calcularPlan,formatearDinero } from '../helpers'
const CotizadorContext = createContext()

const CotizadorProvider = ({children})=>{
    const [resultadoState, setResultadoState]=useState(0)
    const [cargando, setCargando]=useState(false)
    const [error, setError]=useState('')
    const [datos, setDatos]=useState({
    marca:'',
    year:'',
    plan:''
    
})

    const handleChangeDatos = e =>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })       
        
    }
    const cotizarSeguro =()=>{
        // base
           let resultado = 400 
           
        //diferencia de años
           const diferencia= obtenerDirerenciaYear(datos.year)
           

        //hay que restar el 3% por cada año
           resultado -= ((diferencia*3)*resultado) / 100
           
           
          

        //Europeo 30%  
        //Americano 15%
        //Asiatico 5%

           resultado += ((calcularMarca(datos.marca))*resultado) / 100
           
        
        //Básico 20%
        //completo 50%

           resultado *= calcularPlan(datos.plan)         
           resultado = formatearDinero(resultado) 
          
          setCargando(true)

          setTimeout(() => {
            setResultadoState (resultado)
            setCargando(false)
          }, 1500);    
               
    } 
    
    return (
        <CotizadorContext.Provider value={{
         handleChangeDatos,
         datos,
         error,
         setError,
         cotizarSeguro,
         resultadoState,
         setResultadoState,
         cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext