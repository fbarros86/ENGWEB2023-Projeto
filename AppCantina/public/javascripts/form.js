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

  window.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const rows = document.querySelectorAll('.table tbody tr');
  
    searchBar.addEventListener('input', (event) => {
      const searchTerm = event.target.value.toLowerCase();
  
      rows.forEach((row) => {
        const username = row.querySelector('td:first-child').textContent.toLowerCase();
  
        if (username.includes(searchTerm)) {
          row.style.display = 'table-row';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });