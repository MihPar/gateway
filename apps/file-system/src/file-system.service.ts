import { Injectable } from '@nestjs/common';

@Injectable()
export class FileSystemService {
  getHello(): string {
    return 'Hello World!';
  }
  createFile() {
	return 'post was created'
  }
}
