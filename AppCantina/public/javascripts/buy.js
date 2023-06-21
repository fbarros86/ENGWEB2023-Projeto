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

function addsenhas(uID,tipo){
  var num
  if (tipo==0) num=NUM1
  else num=NUM2
  $.ajax({
    url: 'http://localhost:7778/users/' + uID,
    type: 'PUT',
    data: JSON.stringify({ senhas: num }),
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

function PayNow(idUser,tipo){

  addsenhas(idUser,tipo)
  /*
  var quantity = document.getElementById("quantity").value;

  // Create a payment intent on the server
  fetch("/create-payment-intent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ quantity: quantity })
  })
    .then(function(result) {
      return result.json();
    })
    .then(function(data) {
      // Initialize Stripe
      var stripe = Stripe("pk_test_51NL6q4IfJQbvac426Rjy0nnaFBQHnpbTkzu3GWoZriPue8fcOHfShKclnQf6VkV447BvX9gAL4o1aSwgj9LngyHb00UQ6pACS7");

      // Create the card element
      var elements = stripe.elements();
      var cardNumberElement = elements.create("cardNumber");
      var cardExpiryElement = elements.create("cardExpiry");
      var cardCvcElement = elements.create("cardCvc");

      // Mount the card elements to the corresponding divs
      cardNumberElement.mount("#ccnumber");
      cardExpiryElement.mount("#ccexp");
      cardCvcElement.mount("#cvv");

      // Submit the payment form
      document.getElementById("payment-form").addEventListener("submit", function(event) {
        event.preventDefault();

        stripe.confirmCardPayment(data.client_secret, {
          payment_method: {
            card: cardNumberElement,
            billing_details: {
              name: "rafa" 
            }
          }
        })
          .then(function(result) {
            if (result.error) {
              // Display error to the user
              console.error(result.error.message);
            } else {
              // Payment succeeded, show a success message to the user
              console.log("Payment succeeded:", result.paymentIntent);
              // Optionally, you can redirect the user to a success page
              // window.location.href = "/success";
            }
          });
      });
    });
    */
}

function showPayment(idUser,tipo) {
  event.stopPropagation();
  // Show the payment modal
  var ficheiro1 = `
    <div class="w3-margin w3-padding-large w3-white">
      <h2 class="w3-center">Preencha os Credenciais para o Pagamento</h2>
      <form class="w3-container" id="payment-form">
        <div class="w3-row w3-section">
          <label class="w3-col input-label" for="cardnumber">Card Number</label>
          <div id="ccnumber"></div>
        </div>
        <div class="w3-row w3-section">
          <label class="w3-col input-label" for="expirationdate">Expiration Date:</label>
          <div id="ccexp"></div>
        </div>
        <div class="w3-row w3-section">
          <label class="w3-col input-label" for="cvv">CVV:</label>
          <div id="cvv"></div>
        </div>
        <div class="w3-center w3-margin-top">
          <button class="w3-button w3-black" type="submit" id="payButton" onclick='PayNow("${idUser}",${tipo})'>Buy</button>
        </div>
      </form>
    </div>
  `;
  $("#display").empty();
  $("#display").append(ficheiro1);
  $("#display").modal();
  
}
/*
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
*/