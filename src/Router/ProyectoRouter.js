import {Router} from "express"
import { saveProject, getProject, getProjects} from "../Controller/ProyectoController.js"

const router = Router()

router.post("/save", saveProject)
router.get("/obtener/:id", getProject)
router.get("/traerlos/:id", getProjects)


export const RouterProject = router 