import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {GenresService} from "./services/genres.service";
import {Genre, GenreSchema} from "./schemas/genre.schema";

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }])],
  controllers: [AppController],
  providers: [GenresService],
})
export class AppModule {}
