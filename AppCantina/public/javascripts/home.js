var SENHAS

$(function(){
  
  SENHAS =Number (document.querySelector('.senhas').textContent);
  checkreservar()
  var selected = document.querySelectorAll('.reserved');
  for (var i = 0; i < selected.length; i++) {
    var element = selected[i];
    var tooltip = document.createElement('span');
    tooltip.className = 'tooltiptext';
    tooltip.textContent = 'Não é Possível Reservar';
    element.appendChild(tooltip);
}


  
})


function checkreservar(){
  if ($('.selected').length == 0) {
    $('.reservar-btn').hide()
  } else {
    $('.reservar-btn').show()
  }
}

function showContent(refeicao){
    event.stopPropagation();
    var ficheiro=$('<pre>'+ JSON.stringify(refeicao) +'</pre>')
    var ficheiro1=`
<table class="w3-table w3-bordered">
  `
  ficheiro1+=`
    <tr>
        <td>Empratamento</td>
        <td>${refeicao.empratamento}</td>
    </tr>

  <tr>
      <td>Sopa</td>
      <td>${refeicao.sopa}</td>
  </tr>

  <tr>
      <td>Prato</td>
      <td>${refeicao.prato}</td>
  </tr>
  
  <tr>
      <td>Acompanhamento 1</td>
      <td>${refeicao.acompanhamento1}</td>
  </tr>

  <tr>
      <td>Acompanhamento 2</td>
      <td>${refeicao.acompanhamento2}</td>
  </tr>

  <tr>
      <td>Energia</td>
      <td>${refeicao.energia}</td>
  </tr>

  <tr>
      <td>Lipidos</td>
      <td>${refeicao.lipidos}</td>
  </tr>

  <tr>
      <td>Lipidos Saturados</td>
      <td>${refeicao.lipidosSaturados}</td>
  </tr>

  <tr>
      <td>Hidratos</td>
      <td>${refeicao.hidratos}</td>
  </tr>

  <tr>
        <td>Açúcares</td>
        <td>${refeicao.acucares}</td>
    </tr>
    
  <tr>
      <td>Fibras</td>
      <td>${refeicao.acucares}</td>
  </tr>
    
  <tr>
        <td>Proteína</td>
        <td>${refeicao.proteina}</td>
    </tr>
    
  <tr>
        <td>Sal</td>
        <td>${refeicao.sal}</td>
    </tr>
</table>
    `  
  $("#display").empty()
  $("#display").append(ficheiro1)
  $("#display").modal() 
}

function selectDay(element){
  if(!$(element).hasClass('reserved')){
    var imagesenhas = document.querySelector('.senha-img')
    var senhas = document.querySelector('.senhas');

    var reservabutton = document.querySelector('.reservar-btn')
    //var senhaImg = document.querySelector('.senha-img');
    //var senhaImg2 = document.querySelector('.senha-img2');
    //console.log(senhas)
    var selected = true
    var num = document.querySelectorAll('.selected').length;
    element.classList.toggle('selected'); 

    if (element.classList.contains('selected')) {
        if(Number(senhas.textContent) > 0 ){
          SENHAS= Number(SENHAS)-1
          senhas.textContent = String(SENHAS);
          senhas.appendChild(imagesenhas)
          //$('.senhas .senha-img').attr('src', '/images/user_assets/senha2.png');
        }
        else{
          element.classList.toggle('selected'); 
          selected = false
        }
      } else {
        SENHAS=Number(SENHAS)+1
        senhas.textContent = String(SENHAS);
        senhas.appendChild(imagesenhas)

      }
      
    var selectedSquares = document.querySelectorAll('.selected');
      
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
}


function guardaReserva(idR,idU,data){
  newData = moment(data, 'DD-MM-YYYY').add(Number(idR[2]), 'day').format('DD-MM-YYYY')
  reserve={"_id":uuidv4(),"idUser":idU,data:newData,tipo:idR[1]}
  if(idR[0]=="A") reserve["refeicao"]="almoco"
  else reserve["refeicao"]="jantar"
  
  $.post("http://localhost:7777/home/reserve",reserve)
}

function reservou(element,userID,data,week){
    var senhas = document.querySelector('.senhas');
    var nsenhas = Number(senhas.textContent);
    var selectedSquares = document.querySelectorAll('.selected');
    if(selectedSquares.length > 0){
        selectedSquares.forEach(square =>{
            guardaReserva(square.id,userID,data) //J/A N/V 0,1,2,3,4
            square.classList.remove('selected')
    })
    $('.senhas .senha-img').fadeTo(500, 0, function() {
      $(this).attr('src', '/images/user_assets/senha3.png').one('load', function() {
        $(this).fadeTo(500, 1, function() {
          $('.senhas .senha-img').fadeTo(600, 0, function() {
            $(this).attr('src', '/images/user_assets/senha.png').one('load', function() {
              $(this).fadeTo(200, 1);
              
            });
          });
          checkreservar()
          window.location.href = "http://localhost:7777/home/senhas/"+nsenhas+"?week="+week+"&type="+selectedSquares[0].id[1]

        });
      });
    });
    
    
    
      
    }
  }