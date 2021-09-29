    
    
    /*
    
    Comenzamos con JS:
        1. - Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga“ un mensaje”.
    2. - Escribe un programa de una sola línea que escriba en la pantalla un texto que diga« Hello World»(document.write).
    3. - Escribe un programa de una sola línea que escriba en la pantalla el resul + tado de sumar 3 + 5.
    4. - Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga« Hola nombreUsuario»
    5. - Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
    Nota: Tener en cuenta la siguiente función: parseInt

    //1
    alert('un mensaje');
    //2
    document.write('Hello world')


    //3
    var num1 = 3;
    var num2 = 5;
    document.write('El resultado de la suma es <br>' + parseInt(num1 + num2));




    //3
    document.write('El resultado de la suma es <br>' + '3' + '5');



    //4
    var nombreUsuario = prompt('Por favor,indique su nombre');
    document.write('Hola <br>' + nombreUsuario);


    //5
    var num1 = prompt('Ingrese el primer numero');
    var num2 = prompt('Ingrese el segundo numero');
    document.write('El resultado es = ' + (parseInt(num1) + parseInt(num2)));


    //6
    let num1 = parseInt(prompt('Ingrese el primer numero'));
    let num2 = parseInt(prompt('Ingrese el segundo numero'));

    if (num1 > num2) {

        document.write('El numero mayor es ' + num1);
    } else {
        document.write('El numero mayor es ' + num2)
    };



    //7
    let num1 = parseInt(prompt('Ingrese el primer numero'));
    let num2 = parseInt(prompt('Ingrese el segundo numero'));
    let num3 = parseInt(prompt('Ingrese el tercer numero'));


    if (num1 > num2 && num1 > num3) {

        document.write('El numero mayor es ' + num1);
    } else if (num2 > num3) {
        document.write('El numero mayor es ' + num2);
    } else {
        document.write('El numero mayor es  ' + num3);
    }

    //(SEGUNDA CLASE) 
    // ejercicio 8
    let numero = parseInt(prompt('Por favor, ingrese un numero'))

    if (numero % 2 === 0) {
        document.write('El numero es divisible por dos')
    } else {
        document.write('El numero no es divisible por dos')
    };



    //EJERCICIO 9

    let frase = prompt('Por favor, ingrese una frase de no mas de 30 caracteres')

    console.log(frase);

*/
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


    

   






    //ejercicio 10
/*
    let numero = parseInt(prompt('Por favor, ingrese un numero'))

    if (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
        document.write(' El numero es divisible por 2,3,5 o 7')
    } else {
        document.write(' El numero no es divisible por 2,3,5 o 7')
    }



    //ejercicio 11
    let numero = parseInt(prompt('Por favor, ingrese un numero'))

    if (numero % 2 === 0) {
        document.write('El numero es divisible por dos')
    } else if (numero % 3 === 0) {
        document.write('el numero es divisible por 3')
    } else if (numero % 5 === 0) {
        document.write('El numero es divisible por 5')
    } else if (numero % 7 === 0) {
        document.write('el numero es divisible por 7')
    } else {
        document.write('el numero no es divisible por ninguno de los anteriores')
    }


    let edad = parseInt(prompt('Ingrese su edad'))


    if (edad >= 18) {
        document.write('Bienvenido a la fiesta')
    }

    */

    // clase 3
    