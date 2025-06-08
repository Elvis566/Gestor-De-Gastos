import { UserModel } from "../Model/UserModel.js"
import { FotoModel } from "../Model/FotosModel.js"


export const SaveUser = async(req, res)=>{
    try {

        const {gmail, clave, apodo} = req.body

        if(!gmail || !clave || ! apodo){
            return res.status(404).json({message: "Input not valid"})
        }

        const VERIFI_EMAIL = await UserModel.findOne({where:{gmail: gmail}})

        if(VERIFI_EMAIL){
            return res.status(401).json({message: "El email debe ser unico"})
        }

        const USER = await UserModel.create({
            gmail: gmail,
            clave: clave,
            apodo:apodo
        })

        return res.status(200).json({USER: USER, message: "Usuario guardado correctamente"})
    } catch (error) {
        return res.status(500).json({Error: error})
    }
}

export const getUser = async()=>{
    try {
        const ID = req.params.id 

        const USER = await UserModel.findByPk(ID)
        const FOTOS = await FotoModel.findAll({where:{targetType:"user", targetId:ID}})

        if(!USER){
            return res.status(401).json({message:"User is not found"})
        }

        const url = FOTOS.map(foto => foto.url);

        return res.status(200).json({USER: USER, FOTO: url})
        
    } catch (error) {
        return res.status(500).json({Error: error})
    }

}

export const login = async(req, res)=>{ 
    try {
        const {gmail, clave } = req.body

        if(!gmail || !clave){
            return res.status(401).json({message:"Input invalid"})
        }
        
        const verifiEmail = await UserModel.findOne({where:{gmail:gmail}})
        if(!verifiEmail){
            return res.status(401).json({message: "the email does not exist"})
        }

        const CLAVE = verifiEmail.clave

        if(CLAVE != clave){
            return res.status(401).json({message:"Password incorret"})
        }


        return res.status(200).json({USER: verifiEmail.id, message:"Login correcto"})

    } catch (error) {
        return res.status(500).json({Error:error})
    }
}

