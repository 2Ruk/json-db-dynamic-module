import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BoardEntity } from '../entites/board.entity';
import { JsonDBService } from '../common/json-DB.service';
import { UserEntity } from '../entites/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserEntity.name)
    private readonly userJsonDBService: JsonDBService<UserEntity>,
  ) {}

  create() {
    const user = new UserEntity();
    user.name = 'test';
    user.age = 10;

    this.userJsonDBService.saveData('user[]/', user);
    return 'This action adds a new user';
  }

  findAll() {
    this.userJsonDBService.getData('user[]/').then((data) => {
      console.log(data);
    });
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
