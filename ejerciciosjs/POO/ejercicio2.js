/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Cuenta{

    constructor(titular){

    this.titular= titular,
    this.saldo= 0;
    }

    ingresar(monto){
        this.saldo+= monto;
        document.write('<br> Su monto actualizado es de $'+ this.saldo);

    }

    extraer(monto){
        if(monto <=this.saldo){
            this.saldo-=monto;
            document.write('<br>Extraccion exitosa, su nuevo saldo es ='+ this.saldo);
        }else{
            document.write('<br> Fondo insuficiente');
        }

    }

    informar(){
        document.write('<br>La cuenta a nombre de '+ this.titular +'  cuenta con un saldo de $'+ this.saldo);


    }
}

let cuenta = new Cuenta('Alex');

cuenta.informar();
cuenta.ingresar(2000);
cuenta.extraer(500);
cuenta.informar();


