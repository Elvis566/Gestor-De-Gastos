import { ProyectoModel } from "../Model/ProyectoModel.js" 

export const saveProject = async(req, res)=>{
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

export const getProject = async(req, res)=>{
    try {
        const ID = req.params.id

        const PROJECT = await ProyectoModel.findByPk(ID)

        if(!PROJECT){
            return res.status(404).json({message: "no hay proyecto disponible"})
        }

        return res.status(200).json({PROJECT: PROJECT, message: "Proyecto encontrado"})

    } catch (error) {
        return res.status(500).json({Error: error})
    }
}

export const getProjects = async(req, res)=>{
    try {

        const PROJECTS = await ProyectoModel.findAll()

        if(!PROJECTS){
            return res.status(404).json({message: "no hay proyectos disponibles"})
        }

        return res.status(200).json({PROJECTS: PROJECTS, message: "Proyectos encontrados"})

    } catch (error) {
        return res.status(500).json({Error: error})
    }
}