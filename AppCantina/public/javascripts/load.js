$(document).ready(function() {
    // Add loading circle before the table
    $('.w3-table').before('<div class="loading-circle"></div>');
  
    // Hide the table initially
    $('.w3-table').hide();
  
    // Fade in the table
    $('.w3-table').fadeIn(1000);
  
    // Handle right arrow click
    $('.right-arrow').click(function(e) {
      e.preventDefault();
      $('.w3-table').animate(
        {
          opacity: 0, // Fade out the table
          marginLeft: '-100%' // Slide the table to the left
        },
        500,
        function() {
          window.location.href = $('.right-arrow a').attr('href');
        }
      );
    });
  
    // Handle left arrow click
    $('.left-arrow').click(function(e) {
      e.preventDefault();
      $('.w3-table').animate(
        {
          opacity: 0, // Fade out the table
          marginLeft: '100%' // Slide the table to the right
        },
        500,
        function() {
          window.location.href = $('.left-arrow a').attr('href');
        }
      );
    });
  });
  