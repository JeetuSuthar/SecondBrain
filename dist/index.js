"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const JWT_PASSWORD = "okokok123123";
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield db_1.UserModel.findOne({ username });
    if (user) {
        res.status(411).json({
            msg: "User already exists"
        });
        return;
    }
    try {
        const newUser = yield db_1.UserModel.create({
            username,
            password
        });
        res.json({
            msg: "User created successfully",
            user: newUser // Optionally send back the created user
        });
    }
    catch (e) {
        res.status(411).json({
            msg: "Something went wrong",
        });
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const existingUser = yield db_1.UserModel.findOne({ username, password });
        if (existingUser) {
            const token = jsonwebtoken_1.default.sign({ id: existingUser._id }, JWT_PASSWORD, { expiresIn: "1h" } // You can set the token to expire after 1 hour
            );
            res.json({ token });
        }
        else {
            res.status(403).json({
                msg: "Incorrect credentials"
            });
        }
    }
    catch (e) {
        res.status(500).json({
            msg: "Something went wrong",
        });
    }
}));
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
