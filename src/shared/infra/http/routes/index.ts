import { Router } from 'express'

import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import peopleRouter from '@modules/people/infra/http/routes/people.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/people', peopleRouter)

export default routes
