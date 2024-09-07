import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsService } from './blogs/blogs.service';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { CommentsService } from './comments/comments.service';
import { BlogsController } from './blogs/blogs.controller';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { CommentsController } from './comments/comments.controller';

const services = [BlogsService, UsersService, PostsService, CommentsService]
const controllers = [BlogsController, UsersController, PostsController, CommentsController]
const modules = [BlogsModule, UsersModule, PostsModule, CommentsModule]

@Module({
  imports: [ ConfigModule.forRoot({
	isGlobal: true,
  }), 
  TypeOrmModule.forFeature([UsersModule, BlogsModule, PostsModule, CommentsModule], 
  ...modules)
  ],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {}
