import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';

const service = [PaymentsService]

@Module({
  imports: [
	ConfigModule.forRoot({
		isGlobal: true,
	  }),
	  CqrsModule],
  controllers: [PaymentsController],
  providers: [...service],
})
export class PaymentsModule {}
