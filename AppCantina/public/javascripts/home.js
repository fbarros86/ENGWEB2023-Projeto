$(function(){
 
})

function showContent(day){
    var ficheiro=$('<pre>'+ day +'</pre>')
    $("#display").empty()
    $("#display").append(ficheiro)
    $("#display").modal() 
}

function selectDay(element){
    element.classList.toggle('selected');
}
