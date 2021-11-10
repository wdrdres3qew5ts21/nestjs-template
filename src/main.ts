import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NodeJS Template')
    .setDescription('NodeJS Template')
    .setVersion('1.0')
    .addTag('integration')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.enableCors({
    origin: '*',
  });
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
