import {DataTypes} from "sequelize"
import {sequelize} from "../DB/conexion.js"


export const UserModel = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gmail:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apodo: {
        type: DataTypes.STRING,
        allowNull:false
    }, 
},{
    timestamps: false
})
