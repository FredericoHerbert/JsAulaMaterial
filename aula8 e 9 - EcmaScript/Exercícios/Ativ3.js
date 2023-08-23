//3) Fazer um Promise verificando se o usuário é o ADM utilizando: Nome = ADM e Senha = ADM//CRIANDO UMA PROMISE

const primeiraPromise = new Promise((resolve, reject) => {
    const nome = "ADM";
    const senha = "123";


    if(nome === "ADM" & senha === "ADM"){
        resolve("O usuário logado!")
    }else{
        reject("O usuário não permitido!")
    }
})

//primeiraPromise.catch - para apontar erro 

primeiraPromise.then((p) =>{
    console.log(p);
    document.getElementById("admPromise").innerHTML = `${p}`;
})

primeiraPromise.catch((p) =>{
    console.log(p);
    document.getElementById("admPromise").innerHTML = `${p}`;
})