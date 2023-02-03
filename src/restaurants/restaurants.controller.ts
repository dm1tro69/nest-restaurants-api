import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";
import { Restaurant } from "@prisma/client";
import { RestaurantsDto } from "./dto/restaurants.dto";
import { UpdateRestaurantsDto } from "./dto/update-restaurants.dto";
import { PrismaClientExceptionFilter } from "../prisma-exception.filter";

@Controller('restaurants')
@UseFilters(PrismaClientExceptionFilter)
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  findAll():Promise<Restaurant[]>{
    return this.restaurantsService.findAll()
  }

  @Post()
  create(@Body()dto: RestaurantsDto): Promise<Restaurant>{
     return this.restaurantsService.create(dto)
  }

  @Get(':id')
  findById(@Param('id') id){
     return this.restaurantsService.findById(+id)
  }

  @Put(':id')
  update(@Param('id') id, @Body() dto: UpdateRestaurantsDto){
     return this.restaurantsService.update(+id, dto)
  }

  @Delete(':id')
  delete(@Param('id') id){
    return this.restaurantsService.delete(+id)
  }
}
