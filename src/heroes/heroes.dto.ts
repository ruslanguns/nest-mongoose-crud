import { IsString, IsMongoId } from 'class-validator';

export class HeroesDto {

    @IsString()
    name: string;

    @IsMongoId({ each: true })
    talents: string[];
}
