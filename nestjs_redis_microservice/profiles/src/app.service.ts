import { Injectable } from '@nestjs/common';
import { Profile } from './types';

@Injectable()
export class AppService {
  private readonly profiles: Profile[] = [
    {
      id: 1,
      name: 'Profile 1',
    },
    {
      id: 2,
      name: 'Profile 2',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getProfiles(): Profile[] {
    return this.profiles;
  }

  createProfile(profile: Profile): Profile {
    this.profiles.push(profile);
    return profile;
  }
}
