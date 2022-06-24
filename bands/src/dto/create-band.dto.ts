import {IsArray, IsOptional, IsString} from 'class-validator';
import {Member} from "../classes/member";

export class CreateBandDto {

    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    origin: string;

    @IsArray()
    @IsOptional()
    yearsActive: string;

    @IsArray()
    @IsOptional()
    labels: string;

    @IsArray()
    @IsOptional()
    members: Member[];

    @IsArray()
    @IsOptional()
    pastMembers: string;

    @IsString()
    @IsOptional()
    website: string;

    @IsArray()
    @IsOptional()
    genres: string;

    @IsString()
    @IsOptional()
    logo: string;
}