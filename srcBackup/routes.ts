import express from 'express'

import PersonController from './controllers/PersonController'

const routes = express.Router()

routes.get('/person', PersonController.index)
routes.get('/person/:id', PersonController.findOne)
routes.post('/person', PersonController.create)
routes.patch('/person/:id', PersonController.update)

module.exports = routes
