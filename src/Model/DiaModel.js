import {DataTypes, INTEGER} from "sequelize"
import {sequelize} from "../DB/conexion.js"
import { RelacionModel } from "./RelacionModel.js"

export const DiaModel = sequelize.define("dias", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
},{
    timestamps: false
})

RelacionModel.hasMany(DiaModel,{as: "enlaceRD", foreignKey:"relacionId"})
DiaModel.belongsTo(RelacionModel,{as: "enlaceRD", foreignKey:"relacionId"})
