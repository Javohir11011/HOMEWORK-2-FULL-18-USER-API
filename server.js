import express from "express"
import mongoose from "mongoose"
import {config} from "dotenv"
import { routerUser } from "./routes/index.routes.js"

config()

const app = express()
app.use(express.json())

app.use("/user", routerUser)


const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server running...`);
})

