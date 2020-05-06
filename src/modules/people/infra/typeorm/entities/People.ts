import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

export type GenderType = 'm' | 'f'

@Entity('people')
class People {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({
    type: 'enum',
    enum: ['m', 'f'],
  })
  gender: GenderType

  @Column()
  mother: string

  @Column()
  birth_date: Date

  @Column()
  medical_records: number

  @Column()
  hypertension: boolean

  @Column()
  diabetes: boolean

  @Column()
  hidden: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default People
