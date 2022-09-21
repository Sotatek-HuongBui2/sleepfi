import {MigrationInterface, QueryRunner} from "typeorm";

export class addRewardTimeToStakeTable1663668655219 implements MigrationInterface {
    name = 'addRewardTimeToStakeTable1663668655219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `staking` ADD `reward_time` varchar(255) default 0 not null');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `staking` DROP COLUMN `reward_time`');
    }

}
