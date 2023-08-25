const mudaTema = $("#mudaTema")
const textoArea = $("#textoArea")
const headerTema = $("#headerTema")

mudaTema.on("click", function(){

if(mudaTema.hasClass("temaLight")){
    mudaTema.removeClass("temaLight")
    mudaTema.addClass("temaDark")

    textoArea.removeClass("temaLight")
    textoArea.addClass("temaDark")

    headerTema.removeClass("temaLight")
    headerTema.addClass("temaDark")



}else{
    mudaTema.removeClass("temaDark")
    mudaTema.addClass("temaLight")

    textoArea.removeClass("temaDark")
    textoArea.addClass("temaLight")

    headerTema.removeClass("temaDark")
    headerTema.addClass("temaLight")
}


})
