import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonDBModule } from './common/json-DB.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    JsonDBModule.forRoot({ path: '/data' }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
