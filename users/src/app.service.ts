import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    users(): string {
        return 'HELLO USERS SERVICE'
    }
}
