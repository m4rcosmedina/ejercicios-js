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