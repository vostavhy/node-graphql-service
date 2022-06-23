import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    year: string;

    @Prop()
    subGenres: Genre[];
}

export const GenreSchema = SchemaFactory.createForClass(Genre);