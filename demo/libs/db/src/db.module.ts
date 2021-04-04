import { User } from './models/user.model';
import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';

import { TypegooseModule } from 'nestjs-typegoose'

// 全局引入并导出模块
const models = TypegooseModule.forFeature([User])

@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost:27017/demo',{
      useCreateIndex:true,
      useNewUrlParser:true,
      useFindAndModify:false,
      useUnifiedTopology:true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
