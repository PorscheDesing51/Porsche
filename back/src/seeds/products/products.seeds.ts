import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/products/entities/product.entity";
import { Repository } from "typeorm";
import { productsMock } from "./products.seeds.mock";

@Injectable()
export class ProductsSeed {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }

    async createSeedProducts() {
        const existProductName = (await this.productRepository.find()).map(product => product.name);

        for (const productData of productsMock) {
            if (!existProductName.includes(productData.name)) {

                const newProduct = new Product();

                newProduct.name = productData.name;
                newProduct.model = productData.model;
                newProduct.price = productData.price;
                newProduct.description = productData.description;
                newProduct.image = productData.image;
                newProduct.createdAt = productData.createdAt;
                newProduct.updatedAt = productData.updatedAt;

                await this.productRepository.save(newProduct);

            } else {
                console.log(`Product ${productData.name} already exists`);
            }
        }
    }
}