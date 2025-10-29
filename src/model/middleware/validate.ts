import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";


// Generic middleware to validate request body
export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
      // Zod validation errors
      const errors = err.errors?.map((e: any) => ({
        field: e.path.join("."),
        message: e.message
      }));
      return res.status(400).json({ success: false, errors });
    }
  };
