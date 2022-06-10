import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CriarUsuarios1654651560820 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'text',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'nome',
                        type: 'text',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'text',
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios');
    }

}
