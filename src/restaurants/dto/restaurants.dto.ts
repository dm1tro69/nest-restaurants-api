import { Category } from "@prisma/client";
import { IsArray, IsEmail, IsEmpty, IsEnum, IsNumber, IsString } from "class-validator";


export class RestaurantsDto {

  @IsString()
  name: string

  @IsString()
  description: string

  @IsNumber()
  phoneNo: number

  // @IsEnum(Category)

  category?: Category

  @IsString()
  address: string

  @IsEmail()
  email: string


  images?: string[]
}
