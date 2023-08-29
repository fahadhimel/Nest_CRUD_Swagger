import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';
import { UsersService } from './UsersService';

@Crud({
  model: {
    type: User,
  },
})
@Controller('/users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
