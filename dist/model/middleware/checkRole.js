import AppError from "../helper/AppError.js";
export const checkRole = (...roles) => {
    (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return next(new AppError(403, "Forbidden: You have no access"));
        }
        next();
    };
};
//# sourceMappingURL=checkRole.js.map