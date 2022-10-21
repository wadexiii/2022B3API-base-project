import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';
import { User } from '../users.entity';

@Injectable()
export class UserService {
  users: any;
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async createUser(body: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(body)
    return this.usersRepository.save(newUser)
  }

  async findOne(id: string): Promise<User | undefined> {
    return this.users.find((user: { id: string; }) => user.id === id);
  }
}
