const Filme = require('../models/filme');

const createMovie = async (req, resp) => {
    const movie = new Filme({
        title: req.body.title,
        year: req.body.year,
        rated: req.body.rated,
        released: req.body.released,
        runTime: req.body.runTime,
        genre: req.body.genre,
        director: req.body.director,
        writer: req.body.writer,
        plot: req.body.plot,
        language: req.body.language
    });

    try {
        const newMovie = await movie.save();
        resp.status(201).json(newMovie);
        
    } catch (error) {
        resp.status(400).json({message: error.message})
        
    }
    
}

const getAll = async (req, resp) => {
    const filmes = await Filme.find();
    resp.status(200).json(filmes);
}


const updateMovie = async (req, resp) => {

    try {

        const movie = await Filme.findById(req.params.id);
        const updateBody = req.body;

        if(movie == null || movie == undefined) {
            return resp.status(404).json({message: "Filme não encontrado!"});
        };

        let keyList = Object.keys(updateBody);

        keyList.forEach((key) => {
            movie[key] = updateBody[key];
        });

        const movieUpdated = await movie.save();

        resp.status(200).json([{
            "message": "Filme atualizado com sucesso",
            movieUpdated
        }]);

        
    } catch (error) {
        resp.status(500).json({message: error.message})

        
    }

}

const deleteMovie = async (req, resp) => {
    
    try {

        const movie = await Filme.findById(req.params.id);

        if(movie == null || movie == undefined) {
            return resp.status(404).json({message: "Filme não encontrado!"});
        }
    
        await movie.remove();
    
        resp.json({message: "Filme deletado com sucesso"});    
    
        
    } catch (error) {
        return res.status(500).json({message: error.message})        
    }

}

module.exports = {
    createMovie,
    getAll,
    updateMovie,
    deleteMovie
}