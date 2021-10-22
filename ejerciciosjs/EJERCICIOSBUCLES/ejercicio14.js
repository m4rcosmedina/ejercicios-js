/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – 
entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”,
 deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/


 let frase = prompt('ingrese una frase');


 for (let caracter = 0; caracter < frase.length; caracter++) {
     document.write(frase.substr(caracter,1) + '-');
 } 

