import type { NextFunction, Request, Response } from "express";
export declare const sessionController: {
    createSessionController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllSessionsController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getASessionController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateSessionController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteSessionController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=session.controller.d.ts.map