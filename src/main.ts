import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('NFT API')
      .setDescription('The NFT API description')
      .setVersion('1.0')
      .addTag('nft alchemy')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT

  await app.listen(PORT, ()=>console.log(`Server started on port = ${PORT}`));
}
bootstrap();
