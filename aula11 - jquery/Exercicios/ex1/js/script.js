const resultadoDiv = document.querySelector("#resultadoDiv");

$("#calculadora").on("click", function(){
    let numeroTabuadaValue = $("#numeroTabuada").val();

    for(let contador = 1; contador <= 10; contador++){
        resultadoDiv.innerHTML += `${contador} x ${contador * numeroTabuadaValue}<br>`
    }
   
})



