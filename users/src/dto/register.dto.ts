import {IsArray, IsDate, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Length} from 'class-validator';
import {Member} from "../classes/member";
import {Prop} from "@nestjs/mongoose";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @Length(8)
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsArray()
    @IsOptional()
    favouriteArtistIds: string[];

    @IsArray()
    @IsOptional()
    favouriteSongsIds: string[];

    @IsArray()
    @IsOptional()
    favouriteBandsIds: string[];

    @IsArray()
    @IsOptional()
    favouriteGenresIds: string[];

}