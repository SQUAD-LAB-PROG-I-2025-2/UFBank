// import { NestFactory } from '@nestjs/core';
// import { HelloModule } from './interface/rest/hello.module';

// async function bootstrap() {
//   const app = await NestFactory.create(HelloModule);
//   const port = process.env.PORT || 3001;
//   await app.listen(port);
// }
// bootstrap();


// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Define a porta numa variável para podermos usá-la no log
  const port = process.env.PORT ?? 3000;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  // ADICIONE ESTA LINHA:
  console.log(`🚀 Servidor rodando com sucesso em: http://localhost:${port}`);
}
bootstrap();