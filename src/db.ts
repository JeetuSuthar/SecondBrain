import mongoose, { model,Schema } from "mongoose";

const mongourl="mongodb://localhost:27017/SecondBrain"
mongoose.connect(mongourl)
.then(()=>console.log("MongoConnected"))
.catch((error)=>console.error("Error while connecting mongodb",error));

const UserSchema = new Schema({
    username: { type: String, required: true ,unique:true}, // Remove unique from here unless necessary
    password: { type: String, required: true } // Mark password as required
});

export const UserModel = model("User",UserSchema)
 

const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    userId:[{type:mongoose.Types.ObjectId,ref:'User',required:true}]   
})
export const  ContentModel= model("Content",ContentSchema);