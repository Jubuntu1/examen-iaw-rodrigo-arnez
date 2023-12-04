const scanner =require("prompt-sync")({sigint: true});



let vocals="aeiou";
let contador=0;
let hayVocal=false;
function contar(){
    let texto=scanner("texto: ");
    for(let i=0;i<texto.length;i++){
        for(let j=0;j<vocals.length && !hayVocal;j++){
            if(texto[i]===vocals[j]){
                contador++;
            }
        }
    }
    return console.log(texto.length-contador);
}

contar();