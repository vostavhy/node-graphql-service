import {IsArray, IsInt, IsNotEmpty, IsOptional} from 'class-validator';

export class AddToFavouritesDto {
    type: 'band' | 'genre' | 'artist' | 'track';
    id: string;
    userId: string;
}