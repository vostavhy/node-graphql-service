import {IsArray, IsInt, IsNotEmpty, IsOptional} from 'class-validator';

export class CreateGenreDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    @IsInt()
    year: string;

    @IsArray()
    @IsOptional()
    subGenres: string[];
}