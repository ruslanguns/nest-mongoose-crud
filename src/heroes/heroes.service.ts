import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Heroes } from './heroes.interface';
import { HeroesDto } from './heroes.dto';
import { TalentsService } from '../talents/talents.service';

@Injectable()
export class HeroesService {

    constructor(
        @InjectModel('Heroes') private readonly heroesModel: Model<Heroes>,
        private readonly talentService: TalentsService,
    ) { }

    async getHeroes(): Promise<Heroes[]> {
        return await this.heroesModel.find().populate('talents');
    }

    async getHeroeById(heroeId: string): Promise<Heroes> {
        return await this.heroesModel.findById(heroeId).populate('talents');
    }

    async createHeroe(heroe: HeroesDto): Promise<Heroes> {
        // Heroe exists? Optional
        const { name } = heroe;
        const exist = await this.heroesModel.findOne({ name });
        if (!!exist) { throw new BadRequestException(`${name} Heroe already exists`); }

        return await this.heroesModel.create(heroe);
    }

    async updateHeroe(heroeId: string, heroe: HeroesDto): Promise<Heroes> {

        const exist = await this.heroesModel.findById(heroeId);
        if (!exist) {
            throw new BadRequestException('Heroe not found.');
        } else {
            return await this.heroesModel.findByIdAndUpdate(heroeId, heroe, { new: true });
        }
    }

    async deleteHeroe(heroeId: string): Promise<Heroes> {
        return await this.heroesModel.findByIdAndDelete(heroeId);
    }

    async addTalentToHeroe(talentId: string, heroeId: string) {
        const talent = await this.talentService.getTalentById(talentId);
        if (!talent) { throw new BadRequestException(`Talent with ID: ${talentId} does not exist.`); }

        const heroe = await this.heroesModel.findById(heroeId);
        if (!heroe) { throw new BadRequestException(`Heroe with ID: ${heroeId} does not exist.`); }

        if (heroe.talent.includes(talentId)) { throw new BadRequestException(`Heroe already has this talent.`); }

        heroe.talent.push(talentId);
        return await heroe.save();
    }

}
