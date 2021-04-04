import { DbModule } from './../libs/db/src/db.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    // 设置上传文件的路径
    MulterModule.register({
      dest:'uploads'
    }),
    UsersModule,
    DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
