const scanner =require("prompt-sync")({sigint: true});



let suma=0;
let resultados="";
let random=0;

function dados(){

    let dado=scanner("¿dado de 6 o de 10 caras?:");
       
if(Number(dado)==6 || Number(dado)==10){
    let numLan=scanner("numero de lanzamientos:");
    for(let i=0;i<Number(numLan);i++){
        random=Math.floor(Math.random() * Number(dado))+1
        resultados=resultados + " " +random
        suma=suma+Number(random);
        
    }
    return console.log("los resultados que salieron son: "+resultados) + "\n"+console.log("la suma es: "+suma);
}
else{
    return console.log("no me has dado un dado de 6 o de 10");
}

}
dados();




