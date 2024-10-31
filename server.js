import express from "express"
import mongoose from "mongoose"
import {config} from "dotenv"
import { routerUser } from "./routes/index.routes.js"

config()

const app = express()
app.use(express.json())

app.use("/user", routerUser)


const PORT = process.env.PORT
const Db_uri = process.env.DATABASE_URI

app.listen(PORT, async()=>{
    try {
        mongoose.connect(Db_uri)
        console.log(`Server running...`);
        console.log(`DBS connection...`);
    } catch (error) {
        console.log(error);
    }
})



