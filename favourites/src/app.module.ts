import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {FavoritesService} from "./services/favorites.service";
import {Favourite, FavouriteSchema} from "./schemas/favourite.schema";

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), MongooseModule.forFeature([{ name: Favourite.name, schema: FavouriteSchema }])],
  controllers: [AppController],
  providers: [FavoritesService],
})
export class AppModule {}
