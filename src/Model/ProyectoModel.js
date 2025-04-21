import { DataTypes } from "sequelize";
import { sequelize } from "../DB/conexion.js";
import { UserModel } from "./UserModel.js";

export const ProyectoModel = sequelize.define("proyects", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    gastoTotal:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    gananciaTotal: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull:false
    },
    fechaFinal: {
        type: DataTypes.DATE,
        allowNull:false
    },
},{
    timestamps: false
}); 

UserModel.hasMany(ProyectoModel,{as: "enlaceP", foreignKey:"userId"})
ProyectoModel.belongsTo(UserModel,{as: "enlaceP", foreignKey:"userId"})
