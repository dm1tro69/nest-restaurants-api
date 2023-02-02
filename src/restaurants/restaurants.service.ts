import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { Restaurant } from "@prisma/client";


@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Restaurant[]>{
     const restaurants = await this.prisma.restaurant.findMany()
    return restaurants
  }
}
