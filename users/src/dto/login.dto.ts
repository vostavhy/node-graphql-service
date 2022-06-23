import {IsArray, IsDate, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString} from 'class-validator';
import {Prop} from "@nestjs/mongoose";
import {Member} from "../classes/member";

export class LoginDto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}