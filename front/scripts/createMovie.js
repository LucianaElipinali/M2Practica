

const movieForm = document.getElementById("movieForm");

movieForm.addEventListener("submit", async function(event) {
    event.preventDefault(); 

   
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;
    const duration = document.getElementById("duration").value;
    const genre = document.querySelectorAll("input[name='genre']:checked");
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    if (!title || !director || !year || !duration || genre.length === 0 || !rate || !poster) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const formData = new FormData(this);

    
    const movieData = {
        title: formData.get('title'),
        director: formData.get('director'),
        year: formData.get('year'),
        duration: formData.get('duration'),
        genre: formData.getAll('genre'), 
        rate: formData.get('rate'),
        poster: formData.get('poster')
    };

    try {
        await axios.post('http://localhost:3000/movies', movieData);
        alert('Película creada exitosamente');
    } catch (error) {
        alert('Procura introducir los datos correctamente.  ' + error.message);
    }
})