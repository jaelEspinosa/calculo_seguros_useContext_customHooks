
export const MARCAS = [
    {id:1, nombre:'Grande/SUV'},
    {id:2, nombre:'Mediano'},
    {id:3, nombre:'Pequeño'}
]

export const PLANES = [
    {id:1, nombre:'Terceros'},
    {id:2, nombre:'Todo Riesgo'}
]

const YEARMAX = new Date().getFullYear()

export const YEARS = Array.from(new Array(20), (valor, index)=> YEARMAX - index)