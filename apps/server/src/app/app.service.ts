import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' }
  }

  getLeaderboard(): { order: number; name: string; clicks: number }[] {
    return [
      {
        order: 1,
        name: 'Applifting',
        clicks: 1239
      },
      {
        order: 2,
        name: 'Test team',
        clicks: 654
      },
      {
        order: 3,
        name: 'Foo Bar',
        clicks: 25
      }
    ]
  }
}
