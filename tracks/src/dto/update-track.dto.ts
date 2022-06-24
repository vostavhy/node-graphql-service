import {IsArray, IsDate, IsInt, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class UpdateTrackDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    albumId: string;

    @IsArray()
    @IsOptional()
    bandsIds: string[];

    @IsArray()
    @IsOptional()
    artistsIds: string[];

    @IsInt()
    @IsOptional()
    duration; number;

    @IsInt()
    @IsOptional()
    released: number;

    @IsArray()
    @IsOptional()
    genresIds: string[];
}