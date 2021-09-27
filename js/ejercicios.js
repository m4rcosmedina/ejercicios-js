    /*Comenzamos con JS:
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
3.- Escribe un programa de una sola línea que escriba en la pantalla el resul+tado de sumar 3 + 5.
4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
*/   
    
  /*  alert('un mensaje');

    document.write('Hello world')


version 1
    var num1 = 3;
    var num2 = 5;
    document.write('El resultado de la suma es <br>' + parseInt(num1 + num2));

    
 version 2   
    */

    //document.write('El resultado de la suma es <br>' + '3' + '5');



    /*1
    var nombreUsuario = prompt('Por favor,indique su nombre');
    document.write('Hola <br>' + nombreUsuario);

    

    var num1 = prompt('Ingrese el primer numero');
    var num2 = prompt('Ingrese el segundo numero');
    document.write('El resultado es = ' + (parseInt(num1) + parseInt(num2)));
    
    */

 6 /*   var num1 = prompt('Ingrese el primer numero');
    var num2 = prompt('Ingrese el segundo numero');

    if (num1>num2) {
    
    document.write('El numero mayor es ' + num1);}

    else {
        document.write('El numero mayor es ' + num2)};

        */


        var num1 = prompt('Ingrese el primer numero');
        var num2 = prompt('Ingrese el segundo numero');
        var num3 = prompt('Ingrese el tercer numero');

    
        if (num1>num2 && num1>num3) {
        
        document.write('El numero mayor es ' + num1);}
    
        else if (num2>num3) {
            document.write('El numero mayor es ' + num2);}

        else{
            document.write('El numero mayor es  ' + num3);
        }
