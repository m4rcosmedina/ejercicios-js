/*Producto
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las 
propiedades código, nombre y precio, además del método imprime datos, 
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto{
    constructor(codigo,nombre,precio){
        (this.codigo= codigo),(this.nombre=nombre),(this.precio=precio)
    }
    imprimeDatos(){
        return(`Productos en stock = ${this.codigo} + ${this.nombre} + ${this.precio}`)
    }
}

let productos = []

let leche = new Producto(001,"Leche",10.00);
let huevos = new Producto(002,"Huevos",2.00);
let chocolate = new Producto (003, "Chocolate", 25.00);

productos.push('Leche' );
productos.push('huevos');
productos.push('chocolate');

document.write(productos.imprimeDatos);