$(function(){  
})

function showPayment(){
    console.log("ENTROU")
    event.stopPropagation();
    var ficheiro1=`
    <script src="https://collectjs.dev/collect.js"></script>
    <div class="w3-margin w3-padding-large w3-white">
    <h2 class="w3-center">Preencha os Credenciais para o Pagamento</h2>

    <form class="w3-container" method="POST">
      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="cardnumber">Card Number</label>
        <div id="ccnumber"></div>
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="expirationdate">Experiration Date:</label>
        <div id="ccexp"></div>
      </div>

      <div class="w3-row w3-section">
        <label class="w3-col input-label" for="cvv">CVV:</label>
        <div id="cvv"></div>
      </div>
      
        <div class="w3-center w3-margin-top">
          <button class="w3-button w3-black" type="submit" id="payButton">Buy</button>
        </div>
      </form>
      </div>
      `
    $("#display").empty()
    $("#display").append(ficheiro1)
    $("#display").modal() 
}