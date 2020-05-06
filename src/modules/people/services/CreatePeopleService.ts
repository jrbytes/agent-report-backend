import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import People from '../infra/typeorm/entities/People'
import IPeopleRepository from '../repositories/IPeopleRepository'

interface IRequest {
  name: string
  gender: 'm' | 'f'
  mother: string
  birth_date: Date
  medical_records: number
  hypertension: boolean
  diabetes: boolean
  hidden: boolean
}

@injectable()
class CreatePeopleService {
  constructor(
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  public async execute({
    name,
    gender,
    mother,
    birth_date,
    medical_records,
    hypertension,
    diabetes,
    hidden,
  }: IRequest): Promise<People> {
    const checkUserExists = await this.peopleRepository.findByNameAndMR(
      name,
      medical_records,
    )

    if (checkUserExists) {
      throw new AppError('Person already created.')
    }

    const user = await this.peopleRepository.create({
      name,
      gender,
      mother,
      birth_date,
      medical_records,
      hypertension,
      diabetes,
      hidden,
    })

    return user
  }
}

export default CreatePeopleService
