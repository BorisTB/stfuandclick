export interface Team {
  _id: string
  id: string
  order: number
  name: string
  clicks: number
}

export interface UpdateTeamInput {
  session: string
  teamName: string
  clicks: number
}
