import { Controller, Get } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  findAll(){
    return this.restaurantsService.findAll()
  }
}
