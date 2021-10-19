let frase="";

do{
    let otraFrase=prompt("ingrese un texto");
    if(frase==""){
        frase=frase+otraFrase;
    }else{
        frase=frase+"-"+otraFrase;
    }


}while(confirm("desea ingresar otro texto?"))

document.write(frase);   
