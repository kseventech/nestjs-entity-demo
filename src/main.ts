import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { InternalServerExceptionFilter } from './common/exception/internal-server-exception';
import { uuidValidationPipe, validationPipe } from './common/pipes';
import { swaggerConfig, swaggerOptions } from './config/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {bufferLogs: true});
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, swaggerConfig), swaggerOptions);
  app.useGlobalPipes(validationPipe, uuidValidationPipe);
  app.useLogger(app.get(Logger))
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new InternalServerExceptionFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
