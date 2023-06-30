var NSENHAS1, NSENHAS2
var OG1, OG2
var SENHAS
var NUM1,NUM2
$(function(){
  SENHAS = Number(document.querySelector('.senhas').textContent);
  NSENHAS1 = parseFloat($('#preco1').text());
  NSENHAS2 = parseFloat($('#preco2').text());
  NUM1=1+SENHAS
  NUM2=SENHAS + 10;
  OG1=NSENHAS1
  OG2=NSENHAS2
})

function multprice1(times){
  NSENHAS1=OG1*times
  change(1,times)
}

function multprice2(times){
  NSENHAS2=OG2*times
  change(2,times)
}

function change(oneortwo,times){
  var num
  if(oneortwo==1){
    $('#preco1').text((OG1 * times).toFixed(2) + '€');
    NUM1=Number(times)+SENHAS
  }
  else{
    $('#preco2').text((OG2 * times).toFixed(2) + '€');
    NUM2 = SENHAS + 10*Number(times)
  }
}

function addsenhas(tipo){
  var num
  if (tipo==0) num=NUM1
  else num=NUM2
  location.href="http://localhost:7777/buy/"+num
}