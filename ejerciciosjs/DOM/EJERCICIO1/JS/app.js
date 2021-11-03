function generarNumero() {
    let numero = Math.floor(Math.random()*100);
    console.log(numero)
    return numero
}

function numeroUsuario() {
    let numeroNuevo = parseInt(prompt('Ingresa tu numero'))
    console.log(numeroNuevo);
    return numeroNuevo
}
/*

if( numero === numeroNuevo){
    alert('Ganaste!');
    else if(numero > numeroNuevo){
        alert('Te falto un poco, proba de vuelta');
    }else{
        alert('Te pasaste');
    }
}
*/

let numero = generarNumero()
let numeroNuevo = numeroUsuario()