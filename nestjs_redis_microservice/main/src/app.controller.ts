import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AppService } from './app.service';
import { Account, Profile, User } from './types';

@Controller()
export class AppController {
  constructor(
    @Inject('PUBSUB') private readonly client: ClientProxy,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('accounts')
  async getAccounts(): Promise<Account[]> {
    // Get User data from users service
    // Get data using firstValueFrom or lastValueFrom
    const users: User[] = await firstValueFrom(
      await this.client.send({ cmd: 'get_users' }, { page: 1, items: 10 }),
    );

    // Get Profile data from profiles service
    // Get data using new Promise
    const profiles: Profile[] = await new Promise(async (resolve, reject) => {
      try {
        await this.client
          .send({ cmd: 'get_profiles' }, { page: users.map((user) => user.id) })
          .subscribe((res) => resolve(res));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });

    // Return Account
    return users.map<Account>((user) => ({
      ...user,
      ...profiles.find((profile) => profile.id === user.id),
    }));
  }

  @Post('accounts')
  async createUser(@Body() account: Account): Promise<Account> {
    // Give our account data in services
    await this.client.emit<Account>({ cmd: 'create_account' }, account);
    return account;
  }
}
