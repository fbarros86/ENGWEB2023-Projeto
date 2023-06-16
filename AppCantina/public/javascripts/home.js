$(function(){

  var senhas = user.senhas
  console.log(senhas)
  checkreservar()
})


function checkreservar(){
  const myButton = document.getElementById('reservarbtn');
  const selectedSquares = document.querySelectorAll('.selected');
  // if (selectedSquares.length == 0) {
  //   myButton.disabled = true;
  // } else {
  //   myButton.disabled = false;
  // }
}

function showContent(refeicao){
    event.stopPropagation();
    var ficheiro=$('<pre>'+ JSON.stringify(refeicao) +'</pre>')
    var ficheiro1=`
  <div class="w3-margin w3-padding-large w3-white">
  `
  if (true){
    ficheiro1+=`
  
    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="vegetariano">Vegetariano:</label>
        <div class="w3-col" style="margin-top: -8%">
          <input class="w3-check" type="checkbox" id="vegetariano" name="vegetariano" style="transform: scale(1); margin-left: 100px;" disabled checked>
        </div>
    </div>
    `
  }
  else{
    ficheiro1+=`
    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="vegetariano">Vegetariano:</label>
      <div class="w3-col" style="margin-top: -8%">
        <input class="w3-check" type="checkbox" id="vegetariano" name="vegetariano" style="transform: scale(1); margin-left: 100px;" disabled>
      </div>
    </div>
    `
  }
  ficheiro1+=`
    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="empratamento">Empratamento:</label>
      <input class="w3-col" type="number" id="empratamento" name="empratamento" value=${refeicao.empratamento} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="sopa">Sopa:</label>
      <input class="w3-col" type="text" id="sopa" name="sopa" value=${refeicao.sopa} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="prato">Prato:</label>
      <input class="w3-col" type="text" id="prato" name="prato" value=${refeicao.prato} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="acompanhamento1">Acompanhamento 1:</label>
      <input class="w3-col" type="text" id="acompanhamento1" name="acompanhamento1" value=${refeicao.acompanhamento1} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="acompanhamento2">Acompanhamento 2:</label>
      <input class="w3-col" type="text" id="acompanhamento2" name="acompanhamento2" value=${refeicao.acompanhamento2} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="energia">Energia:</label>
      <input class="w3-col" type="number" id="energia" name="energia" value=${refeicao.energia} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="lipidos">Lipidos:</label>
      <input class="w3-col" type="number" id="lipidos" name="lipidos" value=${refeicao.lipidos} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="lipidosSaturados">Lipidos Saturados:</label>
      <input class="w3-col" type="number" id="lipidosSaturados" name="lipidosSaturados" value=${refeicao.lipidosSaturados} disabled>
    </div>

    <div class="w3-row w3-section">
      <label class="w3-col input-label" for="hidratos">Hidratos:</label>
      <input class="w3-col" type="number" id="hidratos" name="hidratos" value=${refeicao.hidratos} disabled>
    </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="acucares">Açúcares:</label>
        <input class="w3-col" type="number" id="acucares" name="acucares" value=${refeicao.acucares} disabled>
      </div>
    
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="fibras">Fibras:</label>
        <input class="w3-col" type="number" id="fibras" name="fibras" value=${refeicao.fibras} disabled>
      </div>
    
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="proteina">Proteína:</label>
        <input class="w3-col" type="number" id="proteina" name="proteina" value=${refeicao.proteina} disabled>
      </div>
    
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="sal">Sal:</label>
        <input class="w3-col" type="number" id="sal" name="sal" value=${refeicao.sal} disabled>
      </div>
    </div>
    `
    $("#display").empty()
    $("#display").append(ficheiro1)
    $("#display").modal() 
}

function selectDay(element){
    const imagesenhas = document.querySelector('.senha-img')
    const senhas = document.querySelector('.senhas');

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

function mudaNumSenhas(uID, nsenhas){
  $.ajax({
    url: 'http://localhost:7778/users/' + uID,
    type: 'PUT',
    data: JSON.stringify({ senhas: nsenhas }),
    contentType: 'application/json',
    success: function(response) {
      // Handle the successful response
      console.log(response);
    },
    error: function(xhr, status, error) {
      // Handle the error
      console.log(error);
    }
  });
  
}

function guardaReserva(idR,idU,data){
  newData = moment(data, 'DD-MM-YYYY').add(Number(idR[1]), 'day').format('DD-MM-YYYY')
  reserve={"_id":uuidv4(),"idUser":idU,data:newData}
  if(idR[0]=="A") reserve["refeicao"]="almoco"
  else reserve["refeicao"]="jantar"
  $.post("http://localhost:7778/reserves",reserve)
}

function reservou(element,userID,data){
    const senhas = document.querySelector('.senhas');
    var nsenhas = Number(senhas.textContent);
    mudaNumSenhas(userID,nsenhas);
    const selectedSquares = document.querySelectorAll('.selected');
    if(selectedSquares.length > 0){
        selectedSquares.forEach(square =>{
            guardaReserva(square.id,userID,data) //J/A - 0,1,2,3,4
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