import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Talents } from './talents.interface';
import { TalentsDto } from './talents.dto';

@Injectable()
export class TalentsService {

    constructor(
        @InjectModel('Talents') private readonly talentsModel: Model<Talents>,
    ) { }

    async getTalents(): Promise<Talents[]> {
        return await this.talentsModel.find();
    }

    async getTalentById(talentId: string): Promise<Talents> {
        return await this.talentsModel.findById(talentId);
    }

    async createTalent(talent: TalentsDto): Promise<Talents> {
        // Talent exists? Optional
        const { name } = talent;
        const exist = await this.talentsModel.findOne({ name });
        if (!!exist) { throw new BadRequestException(`${name} Talent already exists`); }

        return await this.talentsModel.create(talent);
    }

    async updateTalent(talentId: string, talent: TalentsDto): Promise<Talents> {

        const exist = await this.talentsModel.findById(talentId);
        if (!exist) {
            throw new BadRequestException('Talent not found.');
        } else {
            return await this.talentsModel.findByIdAndUpdate(talentId, talent, { new: true });
        }
    }

    async deleteTalent(talentId: string): Promise<Talents> {
        return await this.talentsModel.findByIdAndDelete(talentId);
    }

}
