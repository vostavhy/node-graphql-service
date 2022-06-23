import {IsArray, IsInt, IsNotEmpty, IsOptional} from 'class-validator';

export class UpdateGenreDto {
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsNotEmpty()
    @IsOptional()
    description: string;

    @IsNotEmpty()
    @IsOptional()
    country: string;

    @IsNotEmpty()
    @IsInt()
    @IsOptional()
    year: string;

    @IsArray()
    @IsOptional()
    subGenres: string[];
}