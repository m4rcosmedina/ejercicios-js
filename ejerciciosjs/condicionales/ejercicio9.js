let frase = prompt('Por favor, ingrese una frase de no mas de 30 caracteres')

console.log(frase);


//9

let = frase = prompt('Ingrese una frase');

console.log(frase)
console.log(frase.length);
console.log(frase.charAt(0))

for(let posicion = 0; posicion < frase.length; posicion++ ){
    if(frase.charAt(posicion) == 'a' || frase.charAt(posicion) =='e' ||
     frase.charAt(posicion) == 'i' || frase.charAt(posicion) == 'o' || frase.charAt(posicion) =='u'){
         document.write(frase.charAt(posicion));
     };
}

