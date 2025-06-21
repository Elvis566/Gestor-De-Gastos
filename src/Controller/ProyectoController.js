import { ProyectoModel } from "../Model/ProyectoModel.js" 
import { FotoModel } from "../Model/FotosModel.js"
export const saveProject = async(req, res)=>{
    try {

        const FECHA = new Date();
        const {titulo, descripcion, userId} = req.body;

        const dia = FECHA.getDate();
        const mes = FECHA.getMonth();
        const anio = FECHA.getFullYear();

        if(!titulo || !descripcion || !userId){
            return res.status(404).json({message: "Not found input invalid"})
        }

        const VERIFI_PORJECT = await ProyectoModel.findOne({where:{titulo: titulo}})

        if(VERIFI_PORJECT){
            return res.status(404).json({message: "No repetir titulos"})
        }

        const PROJECT = await ProyectoModel.create({
            titulo: titulo,
            descripcion: descripcion,
            fechaInicio: `${dia}/${mes}/${anio}`,
            userId: userId
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

        const ID = req.params.id

        const PROJECTS = await ProyectoModel.findAll({where:{userId: ID}})

        // const FOTOS = await FotoModel.findAll({where:{targetId: PROJECTS.id, targetType: "proyecto"}})

        if(!PROJECTS){
            return res.status(404).json({message: "no hay proyectos disponibles"})
        }

        const results = await Promise.all(PROJECTS.map(async (project) => {
        const foto = await FotoModel.findOne({
            where: {
            targetId: project.id,
            targetType: "proyecto"
            }
        });

        const parrafo = project.descripcion
        const primeras10 = parrafo.split(" ").slice(0, 10).join(" ");

        return {
            ...project.dataValues,
            shortText: primeras10 + "...",
            foto: foto ? foto.url : null
        };
        }));

        return res.status(200).json({ PROJECTS: results, message: "Proyectos encontrados" });

    } catch (error) {
        return res.status(500).json({Error: error})
    }
}

export const deleteProject = async(req, res)=>{
    try {

        const ID = req.params.id

        const PROYECT = await ProyectoModel.findByPk(ID);

        if(!PROYECT){
            return res.status(404).json({message: "Project no found"})
        }

        PROYECT.set({estado: false})
        PROYECT.save();

        return res.status(200).json({PROYECT: PROYECT, message : "Proyecto eliminado"})

    } catch (error) {
        return res.status.json({Error: error})
    }
}

export const updateProject = async(req, res)=>{
    try {
        const ID = req.params.id

        const {titulo, descripcion} = req.body

        const PROJECT = await ProyectoModel.findByPk(ID)

        if(!PROJECT){
            return res.status(404).json({message: "Not found project"})
        }

        PROJECT.set({titulo: titulo, descripcion:descripcion })
        PROJECT.save()

        return res.status(200).json({PROJECT:PROJECT, message: "Proyecto actualizado"})

    } catch (error) {
        return res.status(500).json({Error: error})
    }
}

export const ingresos = async(req, res)=>{
    try {
        const ID = req.params.id

        let {gasto, ganancia} = req.body

        if(!gasto)gasto=0
        if(!ganancia)ganancia=0

        const PROJECTG = await ProyectoModel.findByPk(ID)

        if(!PROJECTG){
            return res.status(404).json({message: "No se encuentra el proyecto"})
        }

        PROJECTG.set({gastoTotal : gastoTotal + gasto, gananciaTotal : gananciaTotal + ganancia})
        PROJECTG.save

        return res.status(200).json({PROJECTG: PROJECTG, message: "Ingresos guardados"})

    } catch (error) {
        return res.status(500).json({Error:error})
    }
}

export const terminarProject = async(req, res)=>{
    const ID = req.params.id;

    try {
        const PROJECT = await ProyectoModel.findByPk(ID)

        if(!PROJECT){
            return res.status(401).json({message: "No se puede encontrar el proyecto"})
        }

        PROJECT.set({estado: false})
        PROJECT.save()

        return res.status(200).json({PROJECT:PROJECT, message:"Proyecto terminado correctamente"})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}


