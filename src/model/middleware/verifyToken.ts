
import type { NextFunction, Request, Response } from "express";
import AppError from "../helper/AppError.js";
import jwt from 'jsonwebtoken'

export const auth = (req:Request,res:Response,next:NextFunction) =>{
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return next(new AppError(401,"Unauthorize"))

    try {
        const decoded:any = jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).user = decoded;
        next()
    } catch (error) {
        next(new AppError(401,"invalid token"))
    }
}