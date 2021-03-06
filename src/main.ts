import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config';
import { Logger } from '@nestjs/common';
import { ValidationPipe } from './_shared/pipes/validation.pipe';

async function bootstrap() {

  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  await app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);

  logger.log(`Application listening on port ${PORT}`);
}
bootstrap();
