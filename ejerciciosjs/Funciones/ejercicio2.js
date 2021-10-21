/*2- Definir una función que muestre información sobre una cadena 
de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina 
 si esa cadena está formada sólo por mayúsculas, 
 sólo por minúsculas o por una mezcla de ambas.*/

 function fraseSolicitada(frase){

    if((frase===frase.toUpperCase())){
        return 'La frase contiene solo mayusculas';
    }else if(frase===frase.toLowerCase()){
        return 'La frase contiene solo minusuculas';
    }else{
        return 'La frase contiene mayusculas y minusculas';
    }
}

let texto = prompt('Ingrese la frase a analisar por favor')

document.write(fraseSolicitada(texto));