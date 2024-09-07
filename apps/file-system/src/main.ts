import { NestFactory } from '@nestjs/core';
import { FileSystemModule } from './file-system.module';

async function bootstrap() {
  const app = await NestFactory.create(FileSystemModule);
  await app.listen(3000);
}
bootstrap();
