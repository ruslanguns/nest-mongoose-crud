import { IsString } from 'class-validator';

export class TalentsDto {

    @IsString()
    name: string;
}
