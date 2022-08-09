import { Injectable } from '@nestjs/common';
import { User } from './types';

@Injectable()
export class AppService {
  private readonly users: User[] = [
    {
      id: 1,
      login: 'admin_bot',
    },
    {
      id: 2,
      login: 'Garold',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(): User[] {
    return this.users;
  }

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }
}
