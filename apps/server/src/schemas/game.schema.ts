import * as mongoose from 'mongoose'

export interface GameModel extends mongoose.Document {
  session: string
  clicks: number
  team: string
}

export const GameSchema = new mongoose.Schema({
  session: String,
  clicks: Number,
  team: String
})
