import { NestFactory } from '@nestjs/core';
import { HelloModule } from './interface/rest/hello.module';

async function bootstrap() {
  const app = await NestFactory.create(HelloModule);
  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
