import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [MongooseModule.forRoot(process.env.NX_MONGO_URI)],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
