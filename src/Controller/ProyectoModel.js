import { ProyectoModel } from "../Model/ProyectoModel.js" 

export const saveProyect = async(req, res)=>{
    try {

        const FECHA = new Date();
        const {titulo, descripcion} = req.body;

        const dia = FECHA.getDate;
        const mes = FECHA.getMonth;
        const anio = FECHA.getFullYear;

        if(!titulo || !descripcion){
            return res.status(404).json({message: "Not found input invalid"})
        }

        const VERIFI_PORJECT = await ProyectoModel.findOne({where:{titulo: titulo}})

        if(!VERIFI_PORJECT){
            return res.status(404).json({message: "No repetir titulos"})
        }

        const PROJECT = await ProyectoModel.create({
            titulo: titulo,
            descripcion: descripcion,
            fechaInicio: `${dia}/${mes}/${anio}`
        })

        return res.status(200).json({PROJECT: PROJECT})

    } catch (error) {
        return res.status(500).json({Error: error})
    }
}