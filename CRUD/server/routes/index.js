const express = require('express')
const Controller = require('../Controller.js/Controller')
const router = express.Router()




router.get('/pokemon', Controller.getPokemon)
router.post('/pokemon', Controller.postPokemon)
router.put('/pokemon/:id', Controller.editPokemon)
router.get('/pokemon/:id', Controller.getPokemonById)
router.delete('/pokemon/:id',Controller.deletePokemon)


module.exports = router