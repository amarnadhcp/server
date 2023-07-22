import  Express  from "express";
import {login} from "../controllers/admin.controller.js"

const router = Express.Router()

router.post("/login",login)


export default router