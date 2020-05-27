export interface Team {
  order: number
  name: string
  clicks: number
}

export interface UpdateTeamInput {
  session: string
  teamName: string
  clicks: number
}
