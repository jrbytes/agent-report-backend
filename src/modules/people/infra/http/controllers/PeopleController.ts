import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreatePeopleService from '@modules/people/services/CreatePeopleService'

export default class PeopleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      gender,
      mother,
      birth_date,
      medical_records,
      hypertension,
      diabetes,
      hidden,
    } = request.body

    const createPeople = container.resolve(CreatePeopleService)

    const people = await createPeople.execute({
      name,
      gender,
      mother,
      birth_date,
      medical_records,
      hypertension,
      diabetes,
      hidden,
    })

    return response.json(people)
  }
}
