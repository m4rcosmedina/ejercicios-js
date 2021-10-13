
   let ciudades = [];

   do{
       let nombresCiudades=prompt("ingrese el nombre de una ciudad");
       if(ciudades==""){
           ciudades=ciudades+nombresCiudades;
       }else{
           ciudades=ciudades+"-"+nombresCiudades;
       }
   
   
   }while(confirm("desea ingresar otra ciudad?"))
   
   document.write(ciudades);

   console.log(length.ciudades) 

   let ciudades = [];

   for (i = 0 ; i <= ciudades.length; i++){
       x = prompt ('Ingrese una ciudad');
       ciudades.push(x);
   } 