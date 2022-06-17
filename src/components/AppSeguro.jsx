
import Formulario from "./Formulario"


const AppSeguro = () => {
  return (
    <>   
        <header className="my-10 ">
            <h1 className="text-white text-center text-4xl font-black ">Calculadora de precios de Seguro</h1>
            
            <main className="bg-white w-3/4 md:w-2/3 lg:w-2/4 mx-auto rounded-lg p-10 mt-10">
            <Formulario />
            </main>
        </header>
        

    </>
  )
}

export default AppSeguro