import { Router } from "express";
import multer from "multer"
import path from "path"

import {saveFoto, getFotos} from "../Controller/FotoController.js"

const router = Router()
const __dirname = path.resolve()

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, "/src/images"))
    },
    filename:(req, file, cb)=>{
        cb(null, `image_${Date.now()}-${file.originalname}`)
    },
})

const upload = multer ({storage: storage})

router.post("/create", upload.single("avatar"), saveFoto)
router.get("/traer/:id", getFotos)


export const RouterFoto = router
