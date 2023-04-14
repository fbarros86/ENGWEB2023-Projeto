$(function(){
    const myButton = document.getElementById('reservarbtn');
    const selectedSquares = document.querySelectorAll('.selected');
    if (selectedSquares.length === 0) {
      myButton.disabled = true;
    } else {
      myButton.disabled = false;
    }
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
    const reservabutton = document.querySelector('.reservar-btn')
    //const senhaImg = document.querySelector('.senha-img');
    //const senhaImg2 = document.querySelector('.senha-img2');

    element.classList.toggle('selected'); 
    if (element.classList.contains('selected')) {
        senhas.textContent = Number(senhas.textContent) - 1;
      } else {
        senhas.textContent = Number(senhas.textContent) + 1;
      }
      
    const selectedSquares = document.querySelectorAll('.selected');
     if (selectedSquares.length == 0) {
        reservabutton.classList.remove('working-reservar-btn');
        //senhas.classList.remove('areservar');
        //senhaImg.classList.remove('areservar');
        //senhaImg2.classList.remove('areservar');

    }else{
        reservabutton.classList.add('working-reservar-btn');
        //senhas.classList.add('areservar');
        //senhaImg.classList.add('areservar');
        //senhaImg2.classList.remove('areservar');
    }

}

function reservou(element){
    //const senhas = document.querySelector('.senhas');
    const selectedSquares = document.querySelectorAll('.selected');
    if(selectedSquares.length > 0){
        selectedSquares.forEach(square =>{
            square.classList.remove('selected')
    })
    //senhas.classList.remove('areservar');
    //senhas.classList.add('reservou');
    element.classList.remove('working-reservar-btn');
    /*
    setTimeout(function(){
        //senhas.classList.remove('reservou')
    }, 1500);
    */
    }
    
}