import { Injectable } from '@nestjs/common'
import { Team } from '@stfuandclick/data'

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to server!' }
  }

  getLeaderboard(): {
    data: Team[]
  } {
    return {
      data: [
        {
          id: 1,
          order: 1,
          name: 'Applifting',
          clicks: 1239
        },
        {
          id: 2,
          order: 2,
          name: 'Test team',
          clicks: 654
        },
        {
          id: 3,
          order: 3,
          name: 'Foo Bar',
          clicks: 25
        }
      ]
    }
  }
}
