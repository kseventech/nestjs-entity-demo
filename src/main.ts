import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { uuidValidationPipe, validationPipe } from './common/pipes';
import { swaggerConfig, swaggerOptions } from './config/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {bufferLogs: true});
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, swaggerConfig), swaggerOptions);
  app.useGlobalPipes(validationPipe, uuidValidationPipe);
  app.useLogger(app.get(Logger))
  await app.listen(3000);
}
bootstrap();
