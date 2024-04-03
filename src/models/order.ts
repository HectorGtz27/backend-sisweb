// En order.ts
import {
  Table,
  Model,
  Column,
  BelongsToMany,
  CreatedAt,
  UpdatedAt,
  DataType,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import { Product } from "./product";
import { OrderProduct } from "./orderproduct";

const paymentTypes = ["credit_card", "debit_card", "bank_transfer"];

interface OrderAttributes {
  id: number;
  name: string;
  shipedTo: string;
  paymentType: string;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

@Table({
  tableName: "Orders",
})
export class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @Column
  name!: string;

  @Column
  shipedTo!: string;

  @Column(DataType.ENUM({ values: paymentTypes }))
  paymentType!: string;

  @BelongsToMany(() => Product, () => OrderProduct, "orderId", "productId")
  products!: Product[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
