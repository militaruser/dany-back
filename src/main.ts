import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { ConfigService } from '@nestjs/config';
import { ExcepcionesMongoose } from './exceptions/excepciones';
import { AppModule } from './app.module';
import { VariablesEntorno } from './config/config';

async function bootstrap()
{
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  app.useGlobalFilters(new ExcepcionesMongoose());
  const globalPrefix = 'graphql';
  app.setGlobalPrefix(globalPrefix);
  app.use(graphqlUploadExpress());
  app.enableCors();
  const configService = app.get(ConfigService);
  const port = configService.get(VariablesEntorno.puerto);
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap().then();
