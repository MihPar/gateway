import { Module } from '@nestjs/common';
import { FileSystemController } from './file-system.controller';
import { FileSystemService } from './file-system.service';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './models/file.model';

@Module({
  imports: [CqrsModule,
	MongooseModule.forFeature([{name: File.name, schema: FileSchema}])
  ],
  controllers: [FileSystemController],
  providers: [FileSystemService],
})
export class FileSystemModule {}
