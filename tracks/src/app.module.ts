import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {TracksService} from "./services/tracks.service";
import {Track, TrackSchema} from "./schemas/track.schema";

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }])],
  controllers: [AppController],
  providers: [TracksService],
})
export class AppModule {}
