import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Restaurant } from "@prisma/client";
import { RestaurantsDto } from "./dto/restaurants.dto";
import { UpdateRestaurantsDto } from "./dto/update-restaurants.dto";


@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Restaurant[]>{
     const restaurants = await this.prisma.restaurant.findMany()
    return restaurants
  }
  async create(dto:RestaurantsDto): Promise<Restaurant>{
     const rest = await this.prisma.restaurant.create({data: dto})
    if (!rest){
      throw new NotFoundException()
    }
    return rest
  }

  async findById(id: number):Promise<Restaurant>{
    const rest = await this.prisma.restaurant.findUnique({where: {id}})
    if (!rest){
      throw new NotFoundException()
    }
    return rest
  }
  async update(id: number, dto: UpdateRestaurantsDto): Promise<Restaurant>{
     const rest = await this.prisma.restaurant.update({where: {id}, data: dto})
    if (!rest){
      throw new NotFoundException()
    }
    return  rest
  }
  async delete(id): Promise<void>{
    const rest = await this.prisma.restaurant.delete({where: {id}})
    if (!rest){
      throw new NotFoundException()
    }
  }
}
