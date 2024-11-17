"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_PASSWORD = "okokok123123";
const userMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(403).json({ msg: "You are not logged in" });
        return; // To ensure the middleware doesn't continue
    }
    const token = authHeader.split(" ")[1]; // Extract token after "Bearer "
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_PASSWORD);
        //@ts-ignore
        req.userId = decoded.id; // Safely assign the user ID
        next();
    }
    catch (err) {
        res.status(403).json({ msg: "Invalid or expired token" });
    }
};
exports.userMiddleware = userMiddleware;
