import { Controller, Get, Post } from '@nestjs/common';
import { FileSystemService } from './file-system.service';

@Controller()
export class FileSystemController {
  constructor(private readonly fileSystemService: FileSystemService) {}

  @Get()
  getHello(): string {
    return this.fileSystemService.getHello();
  }
//   @Post()
//   async createPost() {
// 	return this.fileSystemService.createFile()
//   }
}
