import {MigrationInterface, QueryRunner} from "typeorm";

export class MarketOrder1663145850915 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE market_orders DROP COLUMN user_id;`);
      await queryRunner.query('ALTER TABLE market_orders ADD seller_id int NULL AFTER `nft_id`;');
      await queryRunner.query('ALTER TABLE market_orders ADD buyer_id int NULL AFTER `seller_id`;');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE market_orders DROP COLUMN seller_id;');
      await queryRunner.query('ALTER TABLE market_orders DROP COLUMN buyer_id;');
    }
}
