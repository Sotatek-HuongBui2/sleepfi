import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSocketSettingTable1663641317334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        'CREATE TABLE `socket_setting` ( ' +
        '`id` int NOT NULL AUTO_INCREMENT, ' +
        '`socket` int NULL, ' +
        '`fee` varchar(100) DEFAULT 0,' +
        '`created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
        '`updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),' +
        ' PRIMARY KEY (`id`)) ENGINE=InnoDB',
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE `socket_setting`');
    }

}
