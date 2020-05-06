import { container } from 'tsyringe'

import '@modules/users/providers'
import './providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IPeopleRepository from '@modules/people/repositories/IPeopleRepository'
import PeopleRepository from '@modules/people/infra/typeorm/repositories/PeopleRepository'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IPeopleRepository>(
  'PeopleRepository',
  PeopleRepository,
)
