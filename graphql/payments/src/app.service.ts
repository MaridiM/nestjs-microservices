import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    payments(): string {
        return 'HELLO PAYMENTS SERVICE'
    }
}
