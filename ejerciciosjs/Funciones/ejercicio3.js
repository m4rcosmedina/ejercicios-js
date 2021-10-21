/*3- Solicitar por pantalla al usuario ingresar el valor de los 
lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo 
 por pantalla.*/

 function perimetro(x,y){
     let suma =(x * 2 + y * 2)

    return suma
 }

 let x = parseInt(prompt('Por favor, ingrese el valor x del rectangulo'));
 let y = parseInt(prompt('Por favor, ahora ingrese el valor y del rectangulo'));

 perimetro(x,y)
 let resultado = perimetro(x,y);
 document.write('El perimetro es :' + resultado)