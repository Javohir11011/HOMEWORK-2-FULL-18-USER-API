import { Router } from "express";
import {createUser, deleteByIdUser, getAllUser, getPutUserById, getUserName } from "../controllers/index.js";


export const routerUser = Router()

routerUser.get("/all",getAllUser)
routerUser.get("/:id", getUserName)
routerUser.post("/new", createUser)
routerUser.put("/put/:id", getPutUserById)
routerUser.delete("/delete/:id", deleteByIdUser)