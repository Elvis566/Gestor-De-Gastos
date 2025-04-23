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
        allowNull: false,
        validate: {
            len: [3, 255]
        }
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gastoTotal:{
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    gananciaTotal: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    fechaInicio: {
        type: DataTypes.STRING,
        allowNull:false
    },
    fechaFinal: {
        type: DataTypes.STRING,
        defaultValue: "Aun esta en proceso el proyecto"
    },
},{
    timestamps: false
}); 

UserModel.hasMany(ProyectoModel,{as: "enlaceP", foreignKey:"userId"})
ProyectoModel.belongsTo(UserModel,{as: "enlaceP", foreignKey:"userId"})
