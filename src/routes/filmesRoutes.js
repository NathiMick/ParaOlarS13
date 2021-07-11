const express = require('express');
const router = express.Router();

const controller = require('../controllers/filmesController');

router.post('/registrar', controller.createMovie);
router.get('/todos', controller.getAll);
router.patch('/:id', controller.updateMovie);
router.delete('/:id', controller.deleteMovie);


module.exports = router