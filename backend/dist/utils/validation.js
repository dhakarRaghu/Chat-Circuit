import { body, validationResult } from "express-validator";
const validator = (validtions) => {
    return async (req, res, next) => {
        for (let validtion of validtions) {
            const result = await validtion.run(req);
            if (result.isEmpty()) {
                break;
            }
            const errors = validationResult(req);
            if (errors.isEmpty()) {
                return next();
            }
            return res.status(400).json({ errors: errors.array() });
        }
    };
};
const signupValidation = [
    body("name").isString().isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
];
//# sourceMappingURL=validation.js.map