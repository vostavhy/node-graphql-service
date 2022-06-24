import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Member} from "../classes/member";

export type BandDocument = Band & Document;

@Schema()
export class Band {

    @Prop({required: true})
    name: string;

    @Prop()
    origin: string;

    @Prop()
    yearsActive: string;

    @Prop()
    labels: string;

    @Prop()
    members: Member[];

    @Prop()
    pastMembers: string;

    @Prop()
    website: string;

    @Prop()
    genres: string;

    @Prop()
    logo: string;
}

export const BandSchema = SchemaFactory.createForClass(Band);