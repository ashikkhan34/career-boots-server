import AppError from "../helper/AppError.js";
import { authLoginService } from "./auth.service.js";
export const authLoginController = async (req, res, next) => {
    try {
        const result = await authLoginService(req.body);
        res.status(200).json({
            success: true,
            message: "login successful",
            data: result,
        });
    }
    catch (error) {
        next(new AppError(400, "bad request "));
    }
};
//# sourceMappingURL=auth.controller.js.map