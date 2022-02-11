import {MigrationInterface, QueryRunner} from "typeorm";

export class carTypoFix1644573727188 implements MigrationInterface {
    name = 'carTypoFix1644573727188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "color" RENAME COLUMN "share" TO "shade"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "color" RENAME COLUMN "shade" TO "share"`);
    }

}
