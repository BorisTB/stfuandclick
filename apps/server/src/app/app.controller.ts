import { Body, Controller, Get, Post } from '@nestjs/common'
import { UpdateTeamInput } from '@stfuandclick/data'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('leaderboard')
  getLeaderboard() {
    return this.appService.getLeaderboard()
  }

  @Post('click')
  updateTeam(@Body() updateTeamInput: UpdateTeamInput) {
    return this.appService.updateTeam(updateTeamInput)
  }
}
