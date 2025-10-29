import type { NextFunction, Response } from "express"
import AppError from "../helper/AppError.js"


export const checkRole = (...roles:string[])=>{
    (req:any, res:Response, next:NextFunction)=>{
        if(!req.user || !roles.includes(req.user.role)){
            return next(new AppError(403, "Forbidden: You have no access"))
        }
        next()
    }
}