import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_PASSWORD = "okokok123123";

export const userMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(403).json({ msg: "You are not logged in" });
        return; // To ensure the middleware doesn't continue
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer "

    try {
        const decoded = jwt.verify(token, JWT_PASSWORD) as { id: string };
        //@ts-ignore
        req.userId = decoded.id; // Safely assign the user ID
        next();
    } catch (err) {
        res.status(403).json({ msg: "Invalid or expired token" });
    }
};
