import { Sequelize } from "sequelize-typescript";
import { SimpleUser } from "./models/simpleuser.model";
import dotenv from "dotenv";
dotenv.config();
const dbConfig: any = {
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.HOST,
  dialect: "mysql",
};
const sequelize = new Sequelize(dbConfig);

sequelize.addModels([SimpleUser]);

export { sequelize };
