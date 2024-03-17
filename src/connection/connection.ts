import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";
import { Category } from "../models/category";

const connection = new Sequelize({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'postgres', //'sisweb_user',
    password: 'Lokomiko.00', //'HDK#$%Ljkwerff.89',
    storage: ':memory:',
    models: [Product, Category]
  });

  async function connectionDB(){
    try{
        await connection.sync({ alter: true });
    }catch(e){
        console.log(e);
    }
  }

  export default connectionDB;