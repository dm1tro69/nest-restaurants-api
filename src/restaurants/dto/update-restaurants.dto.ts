import { RestaurantsDto } from "./restaurants.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateRestaurantsDto extends PartialType(RestaurantsDto){

}
