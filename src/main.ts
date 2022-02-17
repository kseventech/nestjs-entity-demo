import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { uuidValidationPipe, validationPipe } from './common/pipes';
import { swaggerConfig, swaggerOptions } from './config/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, swaggerConfig), swaggerOptions);
  app.useGlobalPipes(validationPipe, uuidValidationPipe);
  await app.listen(3000);
}
bootstrap();
