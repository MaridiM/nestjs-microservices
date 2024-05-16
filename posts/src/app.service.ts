import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    posts(): string {
        return 'HELLO POSTS SERVICE'
    }
}
