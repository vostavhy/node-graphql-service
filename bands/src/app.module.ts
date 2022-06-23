import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {BandsService} from "./services/bands.service";
import {Band, BandSchema} from "./schemas/band.schema";

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongoadmin:secret@localhost:27888/?authSource=admin.'), MongooseModule.forFeature([{ name: Band.name, schema: BandSchema }])],
  controllers: [AppController],
  providers: [BandsService],
})
export class AppModule {}
