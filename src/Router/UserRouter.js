import {SaveUser, getUser} from "../Controller/UserController.js"
import { Router } from "express"

const router = Router()

router.post("/save", SaveUser)
router.get("/get", getUser)

export const RouterUser = router