/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe
 mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

let ciudades = []

do {
    let agregarCiudades = prompt('Ingrese el nombre de una ciudad o 0 para salir');
    if (agregarCiudades !== "0") {
        ciudades.push(agregarCiudades);
    }

} while (confirm('Ingrese otra ciudad'))

ciudades.push('París');

document.write('Las ciudades ingresadas son: ' + ciudades);
document.write(' <br> La longitud del arreglo es ' + ciudades.length);



console.log('Ultimo elemento', ciudades[ciudades.length - 1]);
console.log('Tercer elemento', ciudades[ciudades.length, 2]);
console.log('primer elemento', ciudades[ciudades.length, 0]);


document.write(`<br> Segunda ciudad agregada ${ciudades[ciudades.length, 1]}`);

