import HttpClient from './HttpClient'
import { Team, UpdateTeamInput } from '@stfuandclick/data'

export class MainApi extends HttpClient {
  public constructor() {
    super('http://localhost:3333/api')
  }

  public getLeaderboard = () => this.instance.get<Team[]>('/leaderboard')

  public updateTeam = (updateTeamInput: UpdateTeamInput) =>
    this.instance.post<Team[]>('/click', updateTeamInput)
}

export const mainApi = new MainApi()

export default mainApi
