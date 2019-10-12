import { IsString, IsMongoId } from 'class-validator';

export class HeroesDto {

    @IsString()
    name: string;

    @IsMongoId({ each: true })
    talent: string[];
}
