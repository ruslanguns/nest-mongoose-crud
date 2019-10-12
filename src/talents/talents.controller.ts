import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TalentsDto } from './talents.dto';
import { ValidateObjectId } from '../_shared/pipes/validate-object-id.pipe';
import { TalentsService } from './talents.service';

@Controller('talents')
export class TalentsController {

    constructor(
        private readonly talentsService: TalentsService,
    ) { }

    /**
     * Get list of talents
     */
    @Get()
    async getTalents() {
        return await this.talentsService.getTalents();
    }

    /**
     * Get Talent by Id
     */
    @Get(':talentId')
    async getTalentById(
        @Param('talentId', new ValidateObjectId()) talentId,
    ) {
        return await this.talentsService.getTalentById(talentId);
    }

    /**
     * Create a new talent
     */
    @Post()
    async createTalent(
        @Body() talentsDto: TalentsDto,
    ) {
        return await this.talentsService.createTalent(talentsDto);
    }

    /**
     * Remplace a talent
     */
    @Put(':talentId')
    async updateTalent(
        @Param('talentId', new ValidateObjectId()) talentId,
        @Body() talentsDto: TalentsDto,
    ) {
        return await this.talentsService.updateTalent(talentId, talentsDto);
    }

    /**
     * Delete talent
     */
    @Delete(':talentId')
    async deleteTalent(
        @Param('talentId', new ValidateObjectId()) talentId,
    ) {
        return this.talentsService.deleteTalent(talentId);
    }
}
