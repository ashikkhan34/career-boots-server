// Generic middleware to validate request body
export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (err) {
        // Zod validation errors
        const errors = err.errors?.map((e) => ({
            field: e.path.join("."),
            message: e.message
        }));
        return res.status(400).json({ success: false, errors });
    }
};
//# sourceMappingURL=validate.js.map