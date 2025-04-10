import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "products"
})
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    model: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}
