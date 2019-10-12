import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesSchema } from './heroes.schema';
import { TalentsModule } from '../talents/talents.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Heroes', schema: HeroesSchema },
    ]),
    TalentsModule,
  ],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule { }
