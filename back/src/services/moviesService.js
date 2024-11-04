const Movie = require("../models/Movie");
module.exports = {
  getMovies: async () => {
          const movies = await Movie.find();
          return movies;
  },
  
  createMovie: async (data) => {
          const newMovie = await Movie.create(data);
          return newMovie;
          
      
}
}
  

