import { getRepository, Repository } from 'typeorm'

import IPeopleRepository from '@modules/people/repositories/IPeopleRepository'
import ICreatePeopleDTO from '@modules/people/dtos/ICreatePeopleDTO'

import People from '../entities/People'

class PeopleRepository implements IPeopleRepository {
  private ormRepository: Repository<People>

  constructor() {
    this.ormRepository = getRepository(People)
  }

  public async findByNameAndMR(
    name: string,
    medical_records: number,
  ): Promise<People | undefined> {
    const people = await this.ormRepository.findOne({
      where: { name, medical_records },
    })

    return people
  }

  public async create(userData: ICreatePeopleDTO): Promise<People> {
    const people = this.ormRepository.create(userData)

    await this.ormRepository.save(people)

    return people
  }

  public async save(user: People): Promise<People> {
    return this.ormRepository.save(user)
  }
}

export default PeopleRepository
