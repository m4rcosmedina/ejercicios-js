/*Crear objetos

1- Crea un objeto llamado auto que tenga algunas características como el color
, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.

Modelando clases

Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
Rectángulos
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

let auto = {
    marca: "Volkswagen",
    color: "Blanco",
    modelo : 2018,
    tipodemotor: "naftero",
    puertas: 5,
    encendido:false,


encenderAuto(){
    this.encendido=true
},

apagarAuto(){
    this.encendido=false
},
}

document.write('<br>Color:'+auto.color);
document.write('<br>Marca:'+auto.marca);
document.write('<br>Modelo:'+auto.modelo);
document.write('<br> El auto , ¿Está encendido?'+ auto.encendido);

auto.encenderAuto();

document.write('<br> Esta encendido?'+auto.encendido);

auto.apagarAuto();

document.write('<br> Apagar el auto?'+auto.encendido);