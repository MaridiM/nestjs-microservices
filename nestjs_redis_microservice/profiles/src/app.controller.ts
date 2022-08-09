import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Profile } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'get_profiles' })
  getProfiles(): Profile[] {
    return this.appService.getProfiles();
  }

  @EventPattern({ cmd: 'create_account' })
  createProfile(profile: Profile): Profile {
    return this.appService.createProfile(profile);
  }
}
