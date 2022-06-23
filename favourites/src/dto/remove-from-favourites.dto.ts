import {IsArray, IsInt, IsNotEmpty, IsOptional} from 'class-validator';

export class RemoveFromFavouritesDto {
    type: 'band' | 'genre' | 'artist' | 'track';
    id: string;
    userId: string;
}