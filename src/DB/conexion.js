import { DB_CONNECTION, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_USERNAME } from "../Config/config.js";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD,{
    host: DB_HOST,
    dialect: DB_CONNECTION
})