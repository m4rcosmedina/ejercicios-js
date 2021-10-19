let numeros = 0;

    do {
        let cadenaNum = parseInt(prompt('ingrese un numero'));
        numeros = numeros + cadenaNum;
    } while (confirm('agregue otro numero'))
    document.write(numeros);
