import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreatePeople1588790723378 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'people',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'gender',
            type: 'enum',
            enum: ['m', 'f'],
          },
          {
            name: 'mother',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'birth_date',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'medical_records',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'hypertension',
            type: 'boolean',
            default: 'false',
          },
          {
            name: 'diabetes',
            type: 'boolean',
            default: 'false',
          },
          {
            name: 'hidden',
            type: 'boolean',
            default: 'false',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('people')
  }
}
