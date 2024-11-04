const validarDatosMiddleware = (req, res, next) => {
    const { title, year, director, duration, rate, genre } = req.body;

   
    if (!title || !year || !director || !duration || !rate || !genre) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

  
    if (isNaN(year) || year.toString().length !== 4) {
        return res.status(400).json({ error: 'El año debe ser un número de 4 dígitos.' });
    }

  
    if (!genre || genre.length === 0) {
        return res.status(400).json({ error: 'Debes seleccionar al menos un género.' });
    }

 

 
    if (isNaN(rate) || rate < 1 || rate > 10) {
        return res.status(400).json({ error: 'La tasa de calificación debe estar entre 1 y 10.' });
    }

    
    next();
}

module.exports = { validarDatosMiddleware };