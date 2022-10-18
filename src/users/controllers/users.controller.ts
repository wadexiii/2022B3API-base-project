import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UnauthorizedException, UseInterceptors, UsePipes, ValidationPipe, UseGuards, Request } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { UserService } from '../services/users.service'
import { User } from '../users.entity';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '../../auth/guards/local-auth.guard';
import { AuthService } from '../../auth/services/auth.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

 @Controller('users')
 export class UsersController {
   authService: any;
   constructor(
    private userService: UserService, 
            authService: AuthService) {}


   @Post('auth/sign-up')
   @UsePipes(ValidationPipe)
   @UseInterceptors(ClassSerializerInterceptor)
   signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('users/:id')
  getProfile(@Request() req) {
    return req.user;
  }
}
