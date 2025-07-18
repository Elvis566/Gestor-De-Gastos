import {Router} from "express"
import { saveProject, getProject, getProjects, deleteProject, updateProject, ingresos,terminarProject, lenghtProjectAll} from "../Controller/ProyectoController.js"

const router = Router()

router.post("/save", saveProject)
router.get("/obtener/:id", getProject)
router.get("/traerlos/:id", getProjects)
router.put("/registro-ingresos", ingresos)
router.delete("/project-delete/:id", deleteProject)
router.put("/project-update/:id", updateProject)
router.put("/project-stop/:id", terminarProject)
router.get("/counter-project", lenghtProjectAll)



export const RouterProject = router 