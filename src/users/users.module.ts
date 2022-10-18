import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/services/auth.service';
import { UsersController } from './controllers/users.controller'
import { UserService } from './services/users.service'
import { User } from './users.entity';

@Module({
 imports: [TypeOrmModule.forFeature([User])],
 controllers: [UsersController],
 providers: [UserService,AuthService],
 exports: [UserService,AuthService],
})

export class UserModule {}
