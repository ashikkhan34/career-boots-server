import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";
export declare const validate: (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validate.d.ts.map