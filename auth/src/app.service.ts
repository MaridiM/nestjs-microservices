import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    auth(): string {
        return 'HELLO AUTH SERVICE'
    }
}
