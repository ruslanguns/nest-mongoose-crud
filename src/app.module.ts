import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesModule } from './heroes/heroes.module';

import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './config';
import { TalentsModule } from './talents/talents.module';

@Module({
  imports: [
    HeroesModule,
    TalentsModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: MONGO_URI,
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
