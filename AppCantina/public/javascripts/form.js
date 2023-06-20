$(function(){
})

function deleteUser(idU){
    $.ajax({
        url:"http://localhost:7778/users/"+idU,
        type: 'DELETE',
        success: function(response) {
          // Handle the successful response
          window.location.href ="http://localhost:7777/form"
        },
        error: function(xhr, status, error) {
          // Handle the error
          console.log(error);
        }
      });
    
  }