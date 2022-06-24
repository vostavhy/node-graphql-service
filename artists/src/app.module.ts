import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {ArtistsService} from "./services/artists.service";
import {Artist, ArtistSchema} from "./schemas/artist.schema";

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }])],
  controllers: [AppController],
  providers: [ArtistsService],
})
export class AppModule {}
