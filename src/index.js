import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { sequelize } from "./DB/conexion.js"



const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())

// Configuracion de manejo de archivos json dentro de nuestra api 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// app.use(bodyParser)

const conexion = async() =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync({force: false})
        console.log("Conneccion has been established successfully");
        app.listen(PORT,()=>{
            console.log("Server is running");
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

conexion()