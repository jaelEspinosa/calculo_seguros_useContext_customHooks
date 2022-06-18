export function obtenerDirerenciaYear(year){

    return new Date().getFullYear()-year
}

export function calcularMarca(marca){
    /* let incremento
    switch (marca){

        case '1':
            incremento = 30
            break;
        case '2':
            incremento = 15
            break;
        case '3':
            incremento = 5;
            break;  
        default:
            break;     
    } */
    return marca === "1" ? 30 : marca === "2" ? 15 : 5
}

export function calcularPlan(plan){
   
    
    return plan === "1" ? 1.2 : 1.5
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('es-ES',{
        style: 'currency',
        currency:'EUR',}) 
}