import {Router} from "express"
import { saveProject, getProject} from "../Controller/ProyectoModel.js"

const router = Router()

router.post("/save", saveProject)
router.get("/obtener", getProject)

export const RouterProject = router 