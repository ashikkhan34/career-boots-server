import AppError from "../helper/AppError.js";
import jwt from 'jsonwebtoken';
export const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return next(new AppError(401, "Unauthorize"));
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        next(new AppError(401, "invalid token"));
    }
};
//# sourceMappingURL=verifyToken.js.map