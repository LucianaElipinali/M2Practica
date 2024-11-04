const botonLimpiar = document.getElementById("botonLimpiar");

botonLimpiar.addEventListener("click", () =>{
    const movieForm = document.getElementById("movieForm");
    movieForm.reset();
})