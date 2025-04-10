import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductsSeed } from './seeds/products/products.seeds';
import { config as dotenvConfig } from "dotenv";

dotenvConfig({
  path: ".env.development.local"
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.createSeedProducts();
  console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
