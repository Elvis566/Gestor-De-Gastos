import { FotoModel } from "../Model/FotosModel.js";

export const saveFoto = async(req, res)=>{
    const name = req.body.name
    const url = `../images/${req.file.filename}`

    try {
        if(!name){
            return res.status(401).json({massage:"not input invalid"})
        }

        const FOTO = await FotoModel.create({
            name: name,
            url: url
        });

        return res.status(201).json({FOTO: FOTO, message: "create succesfull"})
    } catch (error) {
        return res.status(500).json({Error:error})
    }
}
