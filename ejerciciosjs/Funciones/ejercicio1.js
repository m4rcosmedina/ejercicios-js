/*Funciones

1- Escribir el código de una función a la que se pasa como parámetro 
un número entero y devuelve como resultado 
una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función.
*/




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
 

 
 



