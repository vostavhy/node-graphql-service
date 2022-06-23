import {IsArray, IsDate, IsInt, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class UpdateArtistDto {
    @IsNotEmpty()
    _id: string;

    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
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