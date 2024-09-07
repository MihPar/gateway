import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const configService = new ConfigService()
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(
		PaymentsModule,
		{
		  transport: Transport.TCP,
		  options: {
			host: configService.get<string>('SERVICE_HOST') || '0.0.0.0',
			port: Number(configService.get<string>('PAY_SERVICE_PORT')) || 3437,
		  },
		},
	)
  await app.listen();
}
bootstrap();
