let filas = parseInt(prompt('Ingrse un numero de filas'));
    let columnas = parseInt(prompt('Ingrse un numero de columnas'));

    let dato = filas * columnas;

    console.log(filas);
    console.log(columnas);
    console.log(dato);



    document.write('<table border>');

    //creo el bucle que genera las  filas.
    for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
        document.write('<tr>')
        // bucle que va a manejar las celdas td
        for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
            document.write('<td>' + resultado-- + '</td>')
        }
        document.write('</tr>')
    }
    document.write('</table>')