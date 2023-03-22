import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1679423415379 implements MigrationInterface {
    name = 'initial1679423415379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "full_name" character varying NOT NULL, "password" character varying NOT NULL, "is_client" boolean NOT NULL DEFAULT false, "clientId" uuid, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phone_number" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "number" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_c16f58426537a660b3f2a26e983" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6c3a73bbc9d8a8082816adc870e" FOREIGN KEY ("clientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phone_number" ADD CONSTRAINT "FK_10163df90f85bca68c3e67d090a" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "phone_number" DROP CONSTRAINT "FK_10163df90f85bca68c3e67d090a"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6c3a73bbc9d8a8082816adc870e"`);
        await queryRunner.query(`DROP TABLE "phone_number"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
