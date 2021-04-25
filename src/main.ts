import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Winnin')
    .setDescription('Desafio Backend')
    .setVersion('1.0')
    .build();

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));
  await app.listen(3000);
}
bootstrap();
