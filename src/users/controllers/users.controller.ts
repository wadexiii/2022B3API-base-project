import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UnauthorizedException, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dtos';
import { UserService } from '../services/user.service'
import { User } from '../user.entity';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UserService,
    ) {}
    
    
  @Post('auth/sign-up')
  @UsePipes(ValidationPipe)
  @UseInterceptors(ClassSerializerInterceptor)
  signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }
}
