import { Module } from '@nestjs/common';
import { TalentsController } from './talents.controller';
import { TalentsService } from './talents.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TalentsSchema } from './talents.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Talents', schema: TalentsSchema },
    ]),
  ],
  exports: [
    TalentsService,
  ],
  controllers: [TalentsController],
  providers: [TalentsService],
})
export class TalentsModule { }
