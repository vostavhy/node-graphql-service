import {IsArray, IsDate, IsOptional, IsString} from 'class-validator';

export class CreateArtistDto {

    @IsString()
    firstName: string;

    @IsString()
    secondName: string;

    @IsOptional()
    @IsString()
    middleName: string;

    @IsOptional()
    @IsDate()
    birthDate: string;

    @IsOptional()
    @IsString()
    birthPlace: string;

    @IsOptional()
    @IsDate()
    deathDate: string;

    @IsOptional()
    @IsString()
    deathPlace: string;

    @IsOptional()
    @IsString()
    country: string;

    @IsOptional()
    @IsArray()
    bands: string[]

    @IsOptional()
    @IsArray()
    instruments: string[];

    @IsOptional()
    @IsArray()
    pseudonims: string[]

    @IsOptional()
    @IsArray()
    labels: string[];
}