import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required :true
    }
},
{
    versionKey:false
})

export const User = mongoose.model("Users", userSchema);
