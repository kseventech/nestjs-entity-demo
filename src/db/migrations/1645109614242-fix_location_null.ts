import {MigrationInterface, QueryRunner} from "typeorm";

export class fixLocationNull1645109614242 implements MigrationInterface {
    name = 'fixLocationNull1645109614242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_57af225a3ff055c439c7b06aba9"`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "location_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_57af225a3ff055c439c7b06aba9" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_57af225a3ff055c439c7b06aba9"`);
        await queryRunner.query(`ALTER TABLE "car" ALTER COLUMN "location_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_57af225a3ff055c439c7b06aba9" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
