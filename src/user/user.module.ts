import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {User} from "./user.entity";
import { UserService } from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      TypeOrmModule.forFeature([User])
  ],

  controllers: [UserController],

  providers: [UserService]
})
export class UserModule { }
