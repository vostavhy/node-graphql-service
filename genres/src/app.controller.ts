import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {GenresService} from "./services/genres.service";
import {Genre} from "./schemas/genre.schema";
import {CreateGenreDto} from "./dto/create-genre.dto";
import {UpdateGenreDto} from "./dto/update-genre.dto";

@Controller('v1/genres')
export class AppController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  all(@Query() query: any): Promise<Genre[]> {
    const { limit = 5, offset = 0, ...filter } = query;
    return this.genresService.findAll({ limit, offset }, filter);
  }

  @Get(':id')
  getById(@Param() params): Promise<Genre> {
    return this.genresService.findOne(params.id);
  }

  @Post()
  create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
    return this.genresService.create(createGenreDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto){
    return this.genresService.update(id, updateGenreDto);
  }

  @Delete(':id')
  delete(@Param() params): Promise<Genre> {
    return this.genresService.delete(params.id);
  }
}
