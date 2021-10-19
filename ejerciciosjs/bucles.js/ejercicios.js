/*Funciones

1- Escribir el código de una función a la que se pasa como parámetro 
un número entero y devuelve como resultado 
una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función.

2- Definir una función que muestre información sobre una cadena 
de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina 
 si esa cadena está formada sólo por mayúsculas, 
 sólo por minúsculas o por una mezcla de ambas.

3- Solicitar por pantalla al usuario ingresar el valor de los 
lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo 
 por pantalla.

//ejercicio1

function numeroEntero(numero){
    if (numero % 2 === 0) {
        return 'El numero es par';
    } else {
        return 'El numero es impar';
    }

}

let num = parseInt(prompt('Ingrese un numero'));
let res = numeroEntero(num);
 document.write(res);
 */

 function fraseSolicitada(frase){

    for(let posicion = 0; posicion <frase.length; posicion++){
        if(){
            return 'La frase contiene solo mayusculas'
        }else if(){
            return 'La frase contiene solo minusuculas'
        }else{
            return 'La frase contiene mayusculas y minusculas'
        }
    }

 }



