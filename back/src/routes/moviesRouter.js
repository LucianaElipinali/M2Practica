const express = require('express');
const  moviesController  = require('../controllers/moviesController');
const moviesRouter = express.Router();
const {validarDatosMiddleware} = require("../middlewares/movieMiddlewares")

moviesRouter.get('/movies', moviesController.getMovies);
moviesRouter.post("/movies", validarDatosMiddleware, moviesController.createMovie)

module.exports = moviesRouter;

