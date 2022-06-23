import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {AddToFavouritesDto} from "../dto/add-to-favourites.dto";
import {Favourite, FavouriteDocument} from "../schemas/favourite.schema";
import {RemoveFromFavouritesDto} from "../dto/remove-from-favourites.dto";

@Injectable()
export class FavoritesService {
    constructor(@InjectModel(Favourite.name) private favouritesModel: Model<FavouriteDocument>) {
    }

    async addToFavourites(addToFavouritesDto: AddToFavouritesDto): Promise<FavouriteDocument> {
        const user = await this.favouritesModel.findOne({userId: addToFavouritesDto.userId}).exec();
        if (user) {
            const favourites = user[addToFavouritesDto.type];
            if (favourites && Array.isArray(favourites)) {
                favourites.push(addToFavouritesDto.id);
            } else {
                user[addToFavouritesDto.type] = [addToFavouritesDto.id];
            }
            return user.save()
        }

        return new this.favouritesModel({
            userId: addToFavouritesDto.userId,
            [addToFavouritesDto.type]: [addToFavouritesDto.id]
        }).save();
    }

    async remmoveFromFavourites(removeFromFavouritesDto: RemoveFromFavouritesDto): Promise<FavouriteDocument> {
        const user = await this.favouritesModel.findOne({userId: removeFromFavouritesDto.userId}).exec();
        if (user) {
            const favourites = user[removeFromFavouritesDto.type];
            if (user[removeFromFavouritesDto.type] && Array.isArray(user[removeFromFavouritesDto.type])) {
                user[removeFromFavouritesDto.type] = user[removeFromFavouritesDto.type].filter(favourite => favourite.id === removeFromFavouritesDto.id);
            }
            return user.save()
        }
    }

    async findOne(iserId: string): Promise<FavouriteDocument> {
        return this.favouritesModel.findOne({iserId});
    }
}