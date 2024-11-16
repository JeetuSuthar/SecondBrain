
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app=express()
const port=process.env.PORT||3000
app.post("/api/v1/signup", (req, res) => {
console.log("Signup")
})

app.post("/api/v1/signin", (req, res) => {

})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});