const movieService = require("../services/moviesService");

module.exports = {
    getMovies: async (req, res) => {
        try {
          const movies = await movieService.getMovies();
          res.status(200).json(movies);
        } catch (error) {
          res.status(500).json({message: error.message});
        }
      },
      
      createMovie: async(req,res) =>{
        try {
          const {title, year, director, duration, genre, rate, poster} = req.body;
        movieService.createMovie({title, year, director,duration, genre, rate, poster});
        res.status(201).send("Se creo la película correctamente")
      }catch (error) {
        res.status(500).send("Error al crear las películas: " + error.message)
        } 
        }
        
      
}