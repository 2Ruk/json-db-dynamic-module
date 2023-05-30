import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JsonDBModule } from '../common/json-DB.module';
import { UserEntity } from '../entites/user.entity';
import { BoardEntity } from '../entites/board.entity';

@Module({
  imports: [JsonDBModule.forFeature([UserEntity, BoardEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
