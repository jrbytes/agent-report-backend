export default interface ICreatePeopleDTO {
  name: string
  gender: 'm' | 'f'
  mother: string
  birth_date: Date
  medical_records: number
  hypertension: boolean
  diabetes: boolean
  hidden: boolean
}
