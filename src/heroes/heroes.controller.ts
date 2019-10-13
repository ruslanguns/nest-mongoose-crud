import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { HeroesDto } from './heroes.dto';
import { ValidateObjectId } from '../_shared/pipes/validate-object-id.pipe';
import { HeroesService } from './heroes.service';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Controller('heroes')
export class HeroesController {

    constructor(
        private readonly heroesService: HeroesService,
    ) { }

    /**
     * Get list of heroes
     */
    @Get()
    async getHeroes() {
        return await this.heroesService.getHeroes();
    }

    /**
     * Get Heroe by Id
     */
    @Get(':heroesId')
    async getHeroeById(
        @Param('heroesId', new ValidateObjectId()) heroesId,
    ) {
        return await this.heroesService.getHeroeById(heroesId);
    }

    /**
     * Create a new Heroe
     */
    @Post()
    async createHero(
        @Body() heroesDto: HeroesDto,
    ) {
        return await this.heroesService.createHeroe(heroesDto);
    }

    /**
     * Modify a heroe
     */
    @Put(':heroeId')
    async updateHero(
        @Param('heroeId', new ValidateObjectId()) heroeId,
        @Body() heroesDto: HeroesDto,
    ) {
        return await this.heroesService.updateHeroe(heroeId, heroesDto);
    }

    /**
     * Delete heroe
     */
    @Delete(':heroeId')
    async deleteHero(
        @Param('heroeId', new ValidateObjectId()) heroeId,
    ) {
        await this.heroesService.deleteHeroe(heroeId);
        throw new HttpException('Heroe deleted', 200);
    }

    /**
     * Add talent to heroe, one by one...
     */
    @Patch(':heroeId')
    async addTalentToHeroe(
        @Param('heroeId', new ValidateObjectId()) heroeId,
        @Body('talent', new ValidateObjectId()) talent,
    ) {
        return await this.heroesService.addTalentToHeroe(talent, heroeId);
    }


}
