import { IsDate, isDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateProductDto {

    @IsString()
    name: string;

    @IsString()
    model: string;

    @IsNumber()
    price: number;

    @IsString()
    description: string;

    @IsString()
    image: string;

    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}
