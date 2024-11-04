document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movieForm');
    const clearButton = document.getElementById('clearButton');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const title = document.getElementById('title').value.trim();
      const director = document.getElementById('director').value.trim();
      const genre = document.getElementById('genre').value.trim();
      const year = document.getElementById('year').value.trim();
      const rating = document.getElementById('rating').value.trim();
  
      if (!title || !director || !genre || !year || !rating) {
        alert('Todos los campos son obligatorios');
        return;
      }
  
      console.log('Película creada:', {
        title,
        director,
        genre,
        year,
        rating
      });
  
    });
  
    clearButton.addEventListener('click', () => {
      document.getElementById('title').value = '';
      document.getElementById('director').value = '';
      document.getElementById('genre').value = '';
      document.getElementById('year').value = '';
      document.getElementById('rating').value = '';
    });
  });
  