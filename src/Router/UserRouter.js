import {SaveUser, getUser, login} from "../Controller/UserController.js"
import { Router } from "express"

const router = Router()

router.post("/save", SaveUser)
router.get("/get", getUser)
router.post("/login", login)

export const RouterUser = router