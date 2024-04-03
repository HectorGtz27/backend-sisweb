// En product.ts
import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import { Category } from "./category";
import { OrderProduct } from "./orderproduct";
import { Order } from "./order";

interface ProductAttributes {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  categoryId: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

@Table({
  tableName: "Products",
})
export class Product extends Model<
  ProductAttributes,
  ProductCreationAttributes
> {
  @Column
  title!: string;

  @Column({
    type: DataType.STRING,
  })
  description?: string;

  @Column
  price!: number;

  @Column
  discountPercentage!: number;

  @Column
  rating!: number;

  @Column
  stock!: number;

  @ForeignKey(() => Category)
  @Column
  categoryId!: number;

  @BelongsTo(() => Category)
  category!: Category;

  @BelongsToMany(() => Order, () => OrderProduct, "productId", "orderId")
  orders!: Order[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
