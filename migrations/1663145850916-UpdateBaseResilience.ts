import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateBaseResilience1663145850916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .update('m_resilience',
                {
                    stat: 1
                },
                {
                    durability: 9,
                })
        await queryRunner.manager
            .update('m_resilience',
                {
                    stat: 2
                },
                {
                    durability: 9,
                })
        await queryRunner.manager
            .update('m_resilience',
                {
                    stat: 3
                },
                {
                    durability: 9,
                })
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
