import { UserModel } from "../Model/UserModel.js"

export const SaveUser = async(req, res)=>{
    try {

        const {gmail, clave, apodo, fotoId} = req.body

        if(!gmail || !clave || ! apodo || !fotoId){
            return res.status(404).json({message: "Input not valid"})
        }

        const VERIFI_EMAIL = await UserModel.findOne({where:{gmail: gmail}})

        if(!VERIFI_EMAIL){
            return res.status(401).json({message: "El email debe ser unico"})
        }

        const USER = await UserModel.create({
            gmail: gmail,
            clave: clave,
            apodo:apodo,
            fotoId: fotoId
        })

        return res.status(200).json({USER: USER, message: "Usuario guardado correctamente"})
    } catch (error) {
        return res.status(500).json({Error: error})
    }
}

