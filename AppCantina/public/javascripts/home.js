$(function(){
 
})

function showContent(day){
    event.stopPropagation();
    var ficheiro=$('<pre>'+ day +'</pre>')
    $("#display").empty()
    $("#display").append(ficheiro)
    $("#display").modal() 
}

function selectDay(element){
    const senhas = document.querySelector('.senhas');
    element.classList.toggle('selected'); 
    if (element.classList.contains('selected')) {
        senhas.textContent = Number(senhas.textContent) - 1;
      } else {
        senhas.textContent = Number(senhas.textContent) + 1;
      }
      
    const selectedSquares = document.querySelectorAll('.selected');
     if (selectedSquares.length == 0) {
        senhas.classList.remove('areservar');
    }else{
        senhas.classList.add('areservar');
    }

}

function reservou(){
    const senhas = document.querySelector('.senhas');
    const selectedSquares = document.querySelectorAll('.selected');
    selectedSquares.forEach(square =>{
        square.classList.remove('selected')
    })
    senhas.classList.remove('areservar');
    senhas.classList.add('reservou');
    setTimeout(function(){
        senhas.classList.remove('reservou')
    }, 1500);

}