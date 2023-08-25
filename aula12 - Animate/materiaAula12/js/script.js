$("#aumentar").on("click", function(){
    $("#caixa").animate({width : "500px" , height : "500px" ,borderRadius : "100%" })
})

$("#diminuir").on("click", function(){
    $("#caixa").animate({width : "300px" , height : "300px"}).animate({ height : "300px"})
})

$("#direita").on("click", function(){
    $("#caixa").animate({marginLeft : "500px", rotate : "360deg"},{duraction : 2000,complete : () => {alert("Me contrata!")} })
})

$("#esquerda").on("click", function(){
    $("#caixa").animate({marginLeft : "0px", rotate : "-360deg", marginTop :"200px"})
})

$("#sumir").on("click", function(){
    $("#caixa").fadeOut(500)
})

$("#aparecer").on("click", function(){
    $("#caixa").fadeIn(500)
})

$("#subir").on("click", function(){
    $("#caixa").slideUp(500)
})

$("#descer").on("click", function(){
    $("#caixa").slideDown(500)
})

$("#esconder").on("click", function(){
    $("#caixa").hide(500)
})

$("#mostrar").on("click", function(){
    $("#caixa").show(500)
})

$("#trocar").on("click", function(){
    $("#caixa").slideToggle(500)
})

$("#desativar").on("click", function(){
    $("#caixaDeTexto").attr("disabled", "true")
})

$("#Ativar").on("click", function(){
    $("#caixaDeTexto").attr("disabled", "true")
    $("#caixaDeTexto").attr("placeholder", "aqui está desativado!")
    $("#caixaDeTexto").attr("value", "Desativado!")
    $("#caixaDeTexto").css("backgroundColor:", "gray")
    $("#caixaDeTexto").css("color:", "white")
})

$("#Ativar").on("click", function(){
    $("#caixaDeTexto").attr("disabled", "false")
})
