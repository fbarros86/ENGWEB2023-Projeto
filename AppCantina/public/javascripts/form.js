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

  const sortBtn = document.getElementById('sort-btn');
  const sortBtnType = document.getElementById('sort-btn-type');
  const tableBody = document.querySelector('.table tbody');

  sortBtn.addEventListener('click', () => {
    const sortedRows = Array.from(rows);
    sortedRows.sort((a, b) => {
      const usernameA = a.querySelector('td:first-child').textContent.toLowerCase();
      const usernameB = b.querySelector('td:first-child').textContent.toLowerCase();
      return usernameA.localeCompare(usernameB);
    });

    tableBody.innerHTML = '';
    sortedRows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });

  sortBtnType.addEventListener('click', () => {
    const sortedRows = Array.from(rows);
    sortedRows.sort((a, b) => {
      const typeA = a.querySelector('td:nth-child(2)').textContent.toLowerCase();
      const typeB = b.querySelector('td:nth-child(2)').textContent.toLowerCase();
      return typeA.localeCompare(typeB);
    });

    tableBody.innerHTML = '';
    sortedRows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});


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

function explain() {
  event.stopPropagation();

  var ficheiro1 = `
  <h1>Formato do Ficheiro JSON</h1>
  <p>[{</p>
    <p>    "email": String, </p>
    <p>    "username": String,</p>
    <p>    "password": String,</p>
    <p>    "tipo": Enum("NE","E","A")</p>
    <p>}]</p>`;
  $("#display").empty();
  $("#display").append(ficheiro1);
  $("#display").modal();
}