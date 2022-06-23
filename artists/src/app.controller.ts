import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ArtistsService} from "./services/artists.service";
import {Artist} from "./schemas/artist.schema";
import {CreateArtistDto} from "./dto/create-artist.dto";
import {UpdateArtistDto} from "./dto/update-artist.dto";

@Controller('v1/artists')
export class AppController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  all(@Query() query: any): Promise<Artist[]> {
    const { limit = 5, offset = 0, ...filter } = query;
    return this.artistsService.findAll({ limit, offset }, filter);
  }

  @Get(':id')
  getById(@Param() params): Promise<Artist> {
    return this.artistsService.findOne(params.id);
  }

  @Post()
  create(@Body() createGenreDto: CreateArtistDto): Promise<Artist> {
    return this.artistsService.create(createGenreDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto){
    return this.artistsService.update(id, updateArtistDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Artist> {
    return this.artistsService.delete(id);
  }
}
