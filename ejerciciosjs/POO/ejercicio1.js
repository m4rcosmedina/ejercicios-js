/*Crear objetos

1- Crea un objeto llamado auto que tenga algunas características como el color
, marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.*/




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