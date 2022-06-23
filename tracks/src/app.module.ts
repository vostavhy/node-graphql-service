import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {ArtistsService} from "./services/artists.service";
import {Artist, ArtistSchema} from "./schemas/artist.schema";

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongoadmin:secret@localhost:27888/?authSource=admin.'), MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }])],
  controllers: [AppController],
  providers: [ArtistsService],
})
export class AppModule {}
