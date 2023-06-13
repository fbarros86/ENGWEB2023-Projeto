$(function(){
    checkreservar()
})

function checkreservar(){
  const myButton = document.getElementById('reservarbtn');
  const selectedSquares = document.querySelectorAll('.selected');
  if (selectedSquares.length === 0) {
    myButton.disabled = true;
  } else {
    myButton.disabled = false;
  }
}

function showContent(day){
    event.stopPropagation();
    var ficheiro=$('<pre>'+ day +'</pre>')
    $("#display").empty()
    $("#display").append(ficheiro)
    $("#display").modal() 
}

function selectDay(element){
    const imagesenhas = document.querySelector('.senha-img')
    const senhas = document.querySelector('.senhas');
    console.log(senhas)

    const reservabutton = document.querySelector('.reservar-btn')
    //const senhaImg = document.querySelector('.senha-img');
    //const senhaImg2 = document.querySelector('.senha-img2');
    //console.log(senhas)
    const selected = true
    const num = document.querySelectorAll('.selected').length;
    element.classList.toggle('selected'); 

    if (element.classList.contains('selected')) {
        if(Number(senhas.textContent) > 0 ){
          senhas.textContent = Number(senhas.textContent) - 1;
          senhas.appendChild(imagesenhas)
          //$('.senhas .senha-img').attr('src', '/images/user_assets/senha2.png');
        }
        else{
          element.classList.toggle('selected'); 
          selected = false
        }
      } else {
        senhas.textContent = Number(senhas.textContent) + 1;
        senhas.appendChild(imagesenhas)

      }
      
    const selectedSquares = document.querySelectorAll('.selected');
      
     if (selectedSquares.length == 0 && (num == 0 || num ==1)) {
        reservabutton.classList.remove('working-reservar-btn');
        $('.senhas .senha-img').fadeTo(200, 0, function() {
          $(this).attr('src', '/images/user_assets/senha.png').on('load', function() {
            $(this).fadeTo(200, 1);
          });
        });
        //senhas.classList.remove('areservar');
        //senhaImg.classList.remove('areservar');
        //senhaImg2.classList.remove('areservar');

    }else{
        reservabutton.classList.add('working-reservar-btn');
        if(selectedSquares.length == 1 && num == 0){
          $('.senhas .senha-img').fadeTo(200, 0, function() {
            $(this).attr('src', '/images/user_assets/senha2.png').on('load', function() {
              $(this).fadeTo(200, 1);
            });
          });
        }
        //senhas.classList.add('areservar');
        //senhaImg.classList.add('areservar');
        //senhaImg2.classList.remove('areservar');
    }
    checkreservar()
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
    //element.classList.remove('working-reservar-btn');
    //senhas.classList.remove('reservou')
    
    $('.senhas .senha-img').fadeTo(500, 0, function() {
      $(this).attr('src', '/images/user_assets/senha3.png').one('load', function() {
        $(this).fadeTo(500, 1, function() {
          $('.senhas .senha-img').fadeTo(600, 0, function() {
            $(this).attr('src', '/images/user_assets/senha.png').one('load', function() {
              $(this).fadeTo(200, 1);
            });
          });
        });
      });
    });
    

       
      
        //senhas.classList.remove('reservou')
    }
    checkreservar()
}