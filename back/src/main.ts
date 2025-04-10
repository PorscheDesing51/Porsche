import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductsSeed } from './seeds/products/products.seeds';
import { config as dotenvConfig } from "dotenv";
import { loggerGlobal } from './middleware/logger.middleware';

dotenvConfig({
  path: ".env.development.local"
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerGlobal);

  const productsSeed = app.get(ProductsSeed);
  await productsSeed.createSeedProducts();
  console.log('*** LA INSERCION DE PRODUCTOS FUE EXITOSA ***');

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
