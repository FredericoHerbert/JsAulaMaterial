//CRIANDO UMA PROMISE

const primeiraPromise = new Promise((resolve, reject) => {
    const nomeP = "Victor"; 


    if(nomeP === "Victor"){
        resolve("O usuário é Victor!")
    }else{
        reject("O usuário não é permitido!")
    }
})

//primeiraPromise.catch - para apontar erro 

primeiraPromise.then((p) =>{
    console.log(p);
})

//await
function sujeitoDemorado(){
    return new Promise ((resolve)=> {
        setTimeout(() => {
            console.log("Carregou o sujeito")
            resolve()
        },2000)
    });
}
//dentro de uma função com uso de async + await = async vai declarar que aquela função não precisa obedecer a ordem e tem prioridade.  E o await tem que ser colocado à frente do termo que precisa 
async function carregando(){
    console.log("Iniciei")
    await sujeitoDemorado()
    console.log("fechei")

}
carregando()

