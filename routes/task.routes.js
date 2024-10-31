import { Router } from "express";
import { createTask, getAllTasks, getTaskById, removeTask, updateTask } from "../controllers/task.controller.js";


export const taskRouter = Router()

taskRouter.get("/taskAll",getAllTasks)
taskRouter.get("/:id", getTaskById)
taskRouter.post("/new", createTask)
taskRouter.put("/put/:id", updateTask)
taskRouter.delete("/delete/:id", removeTask)