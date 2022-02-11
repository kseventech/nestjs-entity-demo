import {MigrationInterface, QueryRunner} from "typeorm";

export class init1644571095904 implements MigrationInterface {
    name = 'init1644571095904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "color" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "share" character varying NOT NULL, "brightness" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying NOT NULL, "city" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying NOT NULL, "manufacturer" character varying NOT NULL, "engine" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "location_id" uuid, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car_colors_color" ("car_id" uuid NOT NULL, "color_id" uuid NOT NULL, CONSTRAINT "PK_fe597832a9c0e524ef2c1119f58" PRIMARY KEY ("car_id", "color_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a4722dcf5349839e90d9d2ad8f" ON "car_colors_color" ("car_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_8811edd51b7ac52c67ff309f83" ON "car_colors_color" ("color_id") `);
        await queryRunner.query(`ALTER TABLE "car" ADD CONSTRAINT "FK_57af225a3ff055c439c7b06aba9" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "car_colors_color" ADD CONSTRAINT "FK_a4722dcf5349839e90d9d2ad8f8" FOREIGN KEY ("car_id") REFERENCES "car"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "car_colors_color" ADD CONSTRAINT "FK_8811edd51b7ac52c67ff309f837" FOREIGN KEY ("color_id") REFERENCES "color"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "car_colors_color" DROP CONSTRAINT "FK_8811edd51b7ac52c67ff309f837"`);
        await queryRunner.query(`ALTER TABLE "car_colors_color" DROP CONSTRAINT "FK_a4722dcf5349839e90d9d2ad8f8"`);
        await queryRunner.query(`ALTER TABLE "car" DROP CONSTRAINT "FK_57af225a3ff055c439c7b06aba9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8811edd51b7ac52c67ff309f83"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a4722dcf5349839e90d9d2ad8f"`);
        await queryRunner.query(`DROP TABLE "car_colors_color"`);
        await queryRunner.query(`DROP TABLE "car"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "color"`);
    }

}
