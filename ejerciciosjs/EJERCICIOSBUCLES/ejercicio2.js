let nota = parseInt(prompt('Por favor, indique su nota'));
const frase = ('La nota es = ');
let calificacionUno = ('Muy deficiente');
let calificacionDos = ('Insuficiente');
let calificaciontres = ('suficiente');
let calificacionCuatro = ('Bien');
let calificacionCinco = ('Notable');
let calificacionSeis = ('Sobresaliente');



switch(nota){
    case 0 :
        document.write( frase + calificacionUno);
    break;
    case 1 :
        document.write( frase + calificacionUno);
    break;
    case 2 :
        document.write( frase + calificacionUno);
    break;
    case 3 :
        document.write( frase + calificacionDos);
    break;
    case 4 :
        document.write( frase + calificacionDos);
    break;
    case 5 :
        document.write( frase + calificaciontres);
    break;
    case 6 :
        document.write( frase + calificaciontres);
    break;
    case 7:
        document.write( frase + calificacionCuatro);
    break;
    case 8 :
        document.write ( frase + calificacionCinco);
    break;
    case 9 :
        document.write ( frase + calificacionCinco);
    break;
    case 10:
        document.write ( frase + calificacionSeis);
    break;
    default:
        alert('Numero erroneo');
        alert('Ingrese un numero valido');
        break;
}