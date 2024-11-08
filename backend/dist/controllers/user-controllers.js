import { User } from "../models/Users.js";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK ", users });
    }
    catch (error) {
        console.log(error);
        // throw new Error('Error getting users');
        return res.status(200).json({ message: "Error ", error });
    }
    ;
};
//# sourceMappingURL=user-controllers.js.map