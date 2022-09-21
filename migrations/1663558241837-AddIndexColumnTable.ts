import {MigrationInterface, QueryRunner} from "typeorm";

export class AddIndexColumnTable1663558241837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`create index idx_nfts on nfts(is_lock)`);
        await queryRunner.query(`create index idx_nftSale on nft_sales(nft_id)`);
        await queryRunner.query(`create index idx_nftAttribute on nft_attributes(nft_id, token_id, owner)`);
        await queryRunner.query(`create index idx_spendingBalance on spending_balances(token_address, wallet_id)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP INDEX idx_nfts on nfts');
        await queryRunner.query('DROP INDEX idx_nftSale on nft_sales');
        await queryRunner.query('DROP INDEX idx_nftAttribute on nft_attributes');
        await queryRunner.query('DROP INDEX idx_spendingBalance on spending_balances');
    }

}
