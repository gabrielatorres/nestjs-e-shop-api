import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Auto pramas type transformation
      transformOptions: {
        enableImplicitConversion: true, //High resources consumption
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
