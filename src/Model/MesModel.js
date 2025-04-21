import {DataTypes} from "sequelize"
import {sequelize} from "../DB/conexion.js"

export const MesModel = sequelize.define("meses", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mes: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})