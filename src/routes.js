const express = require('express')

const PessoaController = require('./controllers/PessoaController')

const routes = express.Router()

routes.get('/pessoas', PessoaController.index)

module.exports = routes