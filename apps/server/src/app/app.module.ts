import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GameSchema } from '../schemas/game.schema'

@Module({
  imports: [
    MongooseModule.forRoot(process.env.NX_MONGO_URI),
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
