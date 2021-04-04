import { ApiProperty } from '@nestjs/swagger'
import { prop } from '@typegoose/typegoose'


export class User{
  // 接口设置参考值和描述
  @ApiProperty({description:'用户名',example:'user'})
  @prop()
  username: string

  @ApiProperty({description:'密码',example:'12345'})
  @prop()
  password: string
}
