console.log(tempData);

const moviesContainer = document.getElementById("movies-container");

if (!moviesContainer) {
    console.error("No se encontró el contenedor de películas.");
}

tempData.forEach((movie) => {
    console.log("Procesando película:", movie);

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title;

    const movieImage = document.createElement("img");
    movieImage.src = movie.poster;
    movieImage.alt = movie.title;

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieImage);

    moviesContainer.appendChild(movieCard);

    movieCard.addEventListener("click", () => {
        movieCard.classList.toggle("selected");

        if (movieCard.classList.contains("selected")) {
            const movieDetails = document.createElement("span");
            movieDetails.classList.add("movie-details");

            const movieYear = document.createElement("p");
            movieYear.textContent = `Year: ${movie.year}`;

            const movieDirector = document.createElement("p");
            movieDirector.textContent = `Director: ${movie.director}`;

            const movieDuration = document.createElement("p");
            movieDuration.textContent = `Duration: ${movie.duration}`;

            const movieGenre = document.createElement("p");
            movieGenre.textContent = `Genre: ${movie.genre.join(", ")}`;

            const movieRate = document.createElement("p");
            movieRate.textContent = `Rate: ${movie.rate}`;

            movieDetails.appendChild(movieYear);
            movieDetails.appendChild(movieDirector);
            movieDetails.appendChild(movieDuration);
            movieDetails.appendChild(movieGenre);
            movieDetails.appendChild(movieRate);

            movieCard.appendChild(movieDetails);
        }

        if (!movieCard.classList.contains("selected")) {
            const movieDetails = movieCard.querySelector(".movie-details");
            if (movieDetails) {
                movieDetails.remove();
            }
        }
    });
});
