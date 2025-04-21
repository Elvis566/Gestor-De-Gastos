import {DataTypes, INTEGER} from "sequelize"
import {sequelize} from "../DB/conexion.js"
import { UserModel } from "./UserModel.js"

export const CalendarioModel = sequelize.define("calendarios", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    calendario: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

UserModel.hasMany(CalendarioModel, {as:"enlaceC", foreignKey:"userId"})
CalendarioModel.belongsTo(UserModel, {as:"enlaceC", foreignKey:"userId"})
