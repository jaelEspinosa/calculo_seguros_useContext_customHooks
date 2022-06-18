
import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import Spinner from "./Spinner"



const AppSeguro = () => {
const {resultadoState,cargando}=useCotizador()
  return (
    <>   
        <header className="my-10 ">
            <h1 className="text-white text-center text-4xl font-black ">Calculadora de precios de Seguro</h1>
            
            <main className="bg-white w-3/4 md:w-2/3 lg:w-2/4 mx-auto rounded-lg p-10 mt-10">
            <Formulario />
            
            

            </main>
            {cargando && <Spinner />}   
            {resultadoState ?  <main className="bg-white w-3/4 md:w-2/3 lg:w-2/4 mx-auto rounded-lg p-10 mt-10">
          
           <p className="m-2">Precio del seguro seleccionado:<span className="font-bold text-lg m-2 ">{resultadoState}</span></p>
           </main>:null}
          </header>
        

    </>
  )
}

export default AppSeguro