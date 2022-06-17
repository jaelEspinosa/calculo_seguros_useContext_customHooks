import useCotizador from "../hooks/useCotizador"


const Error = () => {

 const {error}=useCotizador()

  return (
    <div>
    <p className="bg-red-100 border border-red-400 rounded-lg text-center text-red-800  p-1 m-1 uppercase font-bold ">{error}</p>

    </div>
  )
}

export default Error