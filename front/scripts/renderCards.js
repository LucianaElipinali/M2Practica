const moviesContainer = document.getElementById("movies-container");

const renderCards = (data) =>{
    data.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        const movieTitle = document.createElement("h3");
        movieTitle.innerHTML = movie.title;
        const movieImage = document.createElement("img");
        movieImage.src = movie.poster;
        movieImage.alt = movie.title;
        const movieYear = document.createElement("p");
        movieYear.innerHTML = movie.year;
        const movieDirector = document.createElement("p");
        movieDirector.innerHTML = movie.director;
        const movieGenre = document.createElement("p");
        movieGenre.innerHTML = movie.genre;
        const movieRate = document.createElement("p");
        movieRate.innerHTML = movie.rate;
        const movieDuration = document.createElement("p");
        movieDuration.innerHTML = movie.duration;
    
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieGenre);
        movieCard.appendChild(movieDuration);
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieDirector);
        movieCard.appendChild(movieRate);
        
    
        moviesContainer.appendChild(movieCard);
    })
};

module.exports = renderCards;