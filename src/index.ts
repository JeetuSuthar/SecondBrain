
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


import { ContentModel, UserModel } from "./db";
import { userMiddleware } from "./middleware";

const app = express()

const JWT_PASSWORD="okokok123123"
const port = process.env.PORT || 3000
app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (user) {
        res.status(411).json({
            msg: "User already exists"
        });
        return;
    }

    try {
        const newUser = await UserModel.create({
            username,
            password
        });

        res.json({
            msg: "User created successfully",
            user: newUser  // Optionally send back the created user
        });
    } catch (e) {
        res.status(411).json({
            msg: "Something went wrong",
        });
    }
});



app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ username, password });

        if (existingUser) {
            const token = jwt.sign(
                { id: existingUser._id },
                JWT_PASSWORD,
                { expiresIn: "1h" } // You can set the token to expire after 1 hour
            );
            res.json({ token });
        } else {
            res.status(403).json({
                msg: "Incorrect credentials"
            });
        }
    } catch (e) {
       
        res.status(500).json({
            msg: "Something went wrong",
           
        });
    }
});
app.post("/api/v1/content",userMiddleware, async(req, res) => {
    const type=req.body.type;
    const link=req.body.link;

    await ContentModel.create({
        type,
        link,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    res.json({
        msg:"Content Added"
    })

})

app.get("/api/v1/content",userMiddleware, async(req, res) => {
    //@ts-ignore
    const userId=req.userId;
    const content=await ContentModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })
})

app.delete("/api/v1/content",userMiddleware ,async(req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        // @ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});