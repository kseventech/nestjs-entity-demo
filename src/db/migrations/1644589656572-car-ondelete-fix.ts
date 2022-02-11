import {MigrationInterface, QueryRunner} from "typeorm";

export class carOndeleteFix1644589656572 implements MigrationInterface {
    name = 'carOndeleteFix1644589656572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_57af225a3ff055c439c7b06aba9"`);
        await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_57af225a3ff055c439c7b06aba9" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_57af225a3ff055c439c7b06aba9"`);
        await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_57af225a3ff055c439c7b06aba9" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
