//jQuery ("."ou "#") - seletor do jquery
//jQquery = $(versão resumida)

var paragrafoLorem = jQuery("#paragrafoLorem").text();
//text() - lista o valor
//texto ("ELEMENTO")- sobrevescreve o valor

const usuario = "Victor"
var usuarioHtml = $("#username").text(usuario);

console.log(usuarioHtml)

var quantidadeDePalavras = paragrafoLorem.split(" ").length;

// quantidade dinamica
var areaTexto = $("#areaTexto")
var numeroPalavras = $("#numeroPalavras")
var numeroCaracteres = $("#numeroCaracteres")

// on = addEventListener
areaTexto.on('input', function(){
    let areaTextoValor = areaTexto.val()
    var quantidadeDePalavras = areaTextoValor.split(" ").length;
    numeroPalavras.text(quantidadeDePalavras);
    
    var quantidadeDeCaracteres = areaTextoValor.length;
    numeroCaracteres.text(quantidadeDeCaracteres);

})

//$("#btn").on ("click", function(){
    alert("oi")
//})

//$("#btn").on ("dblclick", function(){
    //alert("nhaiii")
//})


$("#btn").on ("mouseenter", function(){
    areaTexto.addClass("temaEscuro");
})

$("#btn").on ("mouseout", function(){
    areaTexto.removeClass("temaEscuro");
    areaTexto.addClass ("temaClaro");
})