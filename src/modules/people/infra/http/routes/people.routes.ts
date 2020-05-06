import { Router } from 'express'

import PeopleController from '../controllers/PeopleController'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const peopleRouter = Router()
const peopleController = new PeopleController()

peopleRouter.post('/', ensureAuthenticated, peopleController.create)

export default peopleRouter
