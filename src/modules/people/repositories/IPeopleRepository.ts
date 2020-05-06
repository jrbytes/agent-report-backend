import People from '../infra/typeorm/entities/People'
import ICreatePeopleDTO from '../dtos/ICreatePeopleDTO'

export default interface IUsersRepository {
  findByNameAndMR(
    name: string,
    medical_records: number,
  ): Promise<People | undefined>
  create(data: ICreatePeopleDTO): Promise<People>
  save(user: People): Promise<People>
}
