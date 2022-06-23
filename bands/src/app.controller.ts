import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {BandsService} from "./services/bands.service";
import {Band} from "./schemas/band.schema";
import {CreateBandDto} from "./dto/create-band.dto";
import {UpdateBandDto} from "./dto/update-band.dto";

@Controller('v1/bands')
export class AppController {
  constructor(private readonly bandsService: BandsService) {}

  @Get()
  all(@Query() query: any): Promise<Band[]> {
    const { limit = 5, offset = 0, ...filter } = query;
    return this.bandsService.findAll({ limit, offset }, filter);
  }

  @Get(':id')
  getById(@Param() params): Promise<Band> {
    return this.bandsService.findOne(params.id);
  }

  @Post()
  create(@Body() createGenreDto: CreateBandDto): Promise<Band> {
    return this.bandsService.create(createGenreDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBandDto: UpdateBandDto){
    return this.bandsService.update(id, updateBandDto);
  }

  @Delete(':id')
  delete(@Param() params): Promise<Band> {
    return this.bandsService.delete(params.id);
  }
}
