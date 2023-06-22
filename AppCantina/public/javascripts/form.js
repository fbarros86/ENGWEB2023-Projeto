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