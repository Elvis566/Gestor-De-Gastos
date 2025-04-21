import {DataTypes, INTEGER} from "sequelize"
import {sequelize} from "../DB/conexion.js"
import { CalendarioModel } from "./CalendarioModel.js"
import { MesModel } from "./MesModel.js"

export const RelacionModel = sequelize.define("relaciones", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
},{
    timestamps: false
})

CalendarioModel.hasMany(RelacionModel,{as: "enlaceR", foreignKey:"calendarioId"})
RelacionModel.belongsTo(CalendarioModel,{as: "enlaceR", foreignKey:"calendarioId"})

MesModel.hasMany(RelacionModel,{as: "enlaceRM", foreignKey:"mesId"})
RelacionModel.belongsTo(MesModel,{as: "enlaceRM", foreignKey:"mesId"})