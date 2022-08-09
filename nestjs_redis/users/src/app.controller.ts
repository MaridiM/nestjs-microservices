import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { User } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'get_users' })
  getUser(): User[] {
    return this.appService.getUser();
  }

  @EventPattern({ cmd: 'create_account' })
  createUser(user: User): User {
    return this.appService.createUser(user);
  }
}
