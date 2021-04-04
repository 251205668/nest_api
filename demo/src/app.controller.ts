import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  // 上传拦截器 前端file为file
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file){
    return {
      "pathUrl":`http://localhost:3000/uploads/${file.filename}`
    }
  }
}
