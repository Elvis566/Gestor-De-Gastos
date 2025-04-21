import {DataTypes, INTEGER} from "sequelize"
import {sequelize} from "../DB/conexion.js"

export const FotoModel = sequelize.define("fotos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
   
},{
    timestamps: false
})