import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {FavoritesService} from "./services/favorites.service";
import {FavouriteDocument} from "./schemas/favourite.schema";
import {AddToFavouritesDto} from "./dto/add-to-favourites.dto";
import {RemoveFromFavouritesDto} from "./dto/remove-from-favourites.dto";

@Controller('v1/genres')
export class AppController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Put()
  addToFavourites(@Body() addToFavouritesDto: AddToFavouritesDto): Promise<FavouriteDocument> {
    return this.favoritesService.addToFavourites(addToFavouritesDto);
  }

  @Delete()
  removeFromFavourites(@Body() removeFromFavouritesDto: RemoveFromFavouritesDto): Promise<FavouriteDocument> {
    return this.favoritesService.remmoveFromFavourites(removeFromFavouritesDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string): Promise<FavouriteDocument> {
    return this.favoritesService.findOne(userId);
  }
}
