import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Team, UpdateTeamInput } from '@stfuandclick/data'
import { GameModel } from '../schemas/game.schema'

@Injectable()
export class AppService {
  constructor(@InjectModel('Game') private gameModel: Model<GameModel>) {}

  async getLeaderboard(): Promise<{
    data: Team[]
  }> {
    const teams = await this.gameModel
      .aggregate([
        {
          $group: {
            _id: '$team',
            clicks: { $sum: '$clicks' }
          }
        },
        {
          $project: {
            _id: '$_id',
            id: '$_id',
            name: '$_id',
            clicks: '$clicks'
          }
        }
      ])
      .sort({ clicks: -1 })
      .exec()

    return {
      data: teams
    }
  }

  async updateTeam(
    updateTeamInput: UpdateTeamInput
  ): Promise<{
    data: Team
  }> {
    let game = await this.gameModel
      .findOne({ session: updateTeamInput.session })
      .exec()

    if (!game) {
      game = new this.gameModel({
        session: updateTeamInput.session,
        team: updateTeamInput.teamName
      })
    }

    game.clicks = updateTeamInput.clicks
    await game.save()

    const currentTeam = await this.gameModel
      .aggregate([
        { $match: { team: updateTeamInput.teamName } },
        { $group: { _id: null, clicks: { $sum: '$clicks' } } }
      ])
      .exec()

    const teams = await this.gameModel
      .aggregate([
        {
          $group: {
            _id: '$team',
            clicks: { $sum: '$clicks' }
          }
        }
      ])
      .sort({ clicks: -1 })
      .exec()

    console.log({ teams })

    return { data: {} }
  }
}
