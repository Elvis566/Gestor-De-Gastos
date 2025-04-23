import { ProyectoModel } from "../Model/ProyectoModel.js" 

export const saveProyect = async(req, res)=>{
    try {
        const {titulo, descripcion, ga}
    } catch (error) {
        return res.status(500).json({Error: error})
    }
}