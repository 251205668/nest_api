import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // 加上泛型是因为要明确指定对应的框架 nest里面集成express和fast-fly两种框架
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()

  // 静态文件托管
  app.useStaticAssets('uploads',{
    // 图片前缀
    prefix:'/uploads'
  })
  
  // swagger文档配置
  const swapperOptions = new DocumentBuilder()
  .setTitle('接口文档标题')
  .setDescription('接口文档描述')
  .addBearerAuth()
  .setVersion('1.0')
  .build()
// 创建swapper文档实例 然后启动服务
  const document = SwaggerModule.createDocument(app,swapperOptions)
// 访问地址
  SwaggerModule.setup('api-doc',app,document)

  await app.listen(3000);
  console.log('接口文档地址: http://localhost:3000/api-doc')
}
bootstrap();
