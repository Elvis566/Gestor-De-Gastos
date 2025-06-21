import { FotoModel } from "../Model/FotosModel.js";

export const saveFoto = async(req, res)=>{
    const {targetId, targetType} = req.body
    const url = `./src/images/${req.file.filename}`

    try {
        if(!targetId || !targetType){
            return res.status(401).json({massage:"not input invalid"})
        }

        const FOTO = await FotoModel.create({
            url: url,
            targetId:targetId,
            targetType: targetType
        });

        return res.status(201).json({FOTO: FOTO, message: "create succesfull"})
    } catch (error) {
        return res.status(500).json({Error:error})
    }
}

export const getFotos = async(req, res)=>{

    const ID = req.params.id
    try {
        const FOTOS = await FotoModel.findAll({where:{targetId:ID, targetType:"proyecto"}})

        if(!FOTOS){
            return res.status(401).json({message:"No hay imagenes disponibles"})
        }

        return res.status(201).json({FOTOS:FOTOS, message:"Fotos imagenes encontradas correctamente"})
        
    } catch (error) {
        return res.status(500).json({Error:error})
    }
}
