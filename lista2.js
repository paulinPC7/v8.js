const lista=["monica", "arthur", "paulo"]
for (i=0; i<=lista.legeth; i++){
    if (lista[i]=="arthur"){
        console.log("existe")
        console.log("indice:"+i)
    }
}

if(lista.includes("arthur")){
    console.log("existe")
    i=lista.indexOf("arthur")
    console.log("indice:"+i)
}
const nome=["monica", "arthur", "paulo"]
const media=[8  ,9  ,10]
const dado=[nome, media]
function BuscaMedia(nome, dado){
    lnome= dado.slice(0,0)
    lmedia= dado.slice(1,1)
    if(lnome.includes(nome)){
        return lmedia[lnome.indexOf(nome)]
    }
    return -1
}
