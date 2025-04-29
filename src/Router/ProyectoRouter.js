import {Router} from "express"
import { saveProject, getProject, getProjects} from "../Controller/ProyectoModel.js"

const router = Router()

router.post("/save", saveProject)
router.get("/obtener/:id", getProject)
router.get("/obtener", getProjects)


export const RouterProject = router 