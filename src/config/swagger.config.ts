import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle('nestjs-entity-demo')
    .setDescription('nestjs-entity-demo API documentation')
    .setVersion('1.1')
    .addBearerAuth()
    .build();

export const swaggerOptions = {
    swaggerOptions: {
        persistAuthorization: true,
    },
    customSiteTitle: 'Starter Api Docs',
}
