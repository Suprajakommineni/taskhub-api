import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe (you should already have this)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // CORS — allow your frontend origin
  app.enableCors({
    origin: true, // allow all origins (for development)',
  });

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('TaskHub API')
    .setDescription('API for managing projects and tasks')
    .setVersion('1.0')
    .addBearerAuth() // enables the Authorize button for JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // accessible at /docs

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();