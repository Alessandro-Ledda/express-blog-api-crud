// richiamo istanza di express
const express = require('express');

// creiamo un istanza dell'oggetto rotte di express
const router = express.Router;

// import del controller della risorsa blog
const postsController = require('./../controllers/postsControllers');

// rotte crud per i blog

// index
router.get('/', postsController.index);

// show
router.get('/:id', postsController.show);

// store
router.post('/', postsController.store);

// update
router.put('/:id', postsController.update);

// modify
router.patch('/:id', postsController.modify);

// destroy
router.delete('/:id', postsController.destroy);

// esporto l'istanza delle rotte
module.exports = router;