import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user.dtos';
import { User } from '../user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async createUser(body: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(body)
    return this.usersRepository.save(newUser)
  }
}
