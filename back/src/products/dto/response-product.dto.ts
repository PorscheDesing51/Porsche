import { IsDate, IsNumber, IsString, IsUUID } from "class-validator"

export class ResponseProductDto {
    @IsUUID()
    id: string

    @IsString()
    name: string

    @IsString()
    model: string

    @IsNumber()
    price: number

    @IsString()
    description: string

    @IsString()
    image: string

    @IsDate()
    createdAt: Date

    @IsDate()
    updatedAt: Date

    constructor(parttial: Partial<ResponseProductDto>) {

        const { id, name, model, price, description, image, createdAt, updatedAt } = parttial

        this.id = id
        this.name = name
        this.model = model
        this.price = price
        this.description = description
        this.image = image
        this.createdAt = createdAt
        this.updatedAt = updatedAt

    }

}