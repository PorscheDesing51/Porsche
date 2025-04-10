import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/products/entities/product.entity";
import { ProductsSeed } from "./products/products.seeds";

@Module({
    imports: [TypeOrmModule.forFeature([
        Product
    ])],
    providers: [
        ProductsSeed
    ],
    exports: [
        ProductsSeed
    ],
})

export class SeedsModule { }