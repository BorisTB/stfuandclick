import HttpClient from './HttpClient'
import { Team } from '@stfuandclick/data'

export class MainApi extends HttpClient {
  public constructor() {
    super('http://localhost:3333/api')
  }

  public getLeaderboard = () => this.instance.get<Team[]>('/leaderboard')
}

export const mainApi = new MainApi()

export default mainApi
