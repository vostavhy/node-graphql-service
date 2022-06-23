import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {FavoritesService} from "./services/favorites.service";
import {Favourite, FavouriteSchema} from "./schemas/favourite.schema";

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongoadmin:secret@localhost:27888/?authSource=admin.'), MongooseModule.forFeature([{ name: Favourite.name, schema: FavouriteSchema }])],
  controllers: [AppController],
  providers: [FavoritesService],
})
export class AppModule {}
