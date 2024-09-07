import { NestFactory } from '@nestjs/core';
import { FileSystemModule } from './file-system.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const configService = new ConfigService();
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		FileSystemModule,
		{
		  transport: Transport.TCP,
		  options: {
			host: configService.get<string>('SERVICE_HOST') || '0.0.0.0',
			port: Number(configService.get<string>('FILE_SERVICE_PORT')) || 3438,
		  },
		},
	  );
  await app.listen();
}
bootstrap();
