import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MongooseModule} from '@nestjs/mongoose'
import { DatabaseModule} from './nestjs-database.module'

@Module({
  imports: [DatabaseModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/Register')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
