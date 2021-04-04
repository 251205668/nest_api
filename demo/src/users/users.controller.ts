import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: User
})
// 文档控制器归类
@ApiTags('用户')
@Controller('users')
export class UsersController {
  constructor(
    @InjectModel(User) private readonly model
  ){}
}
