import { User } from "../models/Users.js";
import { hash, compare } from 'bcrypt';
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
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(401).send("User already exists");
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: "OK ", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        // throw new Error('Error getting users');
        return res.status(200).json({ message: "Error ", cause: error.message });
    }
    ;
};
export const userLogin = async (req, res, next) => {
    try {
        // user login
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user)
            return res.status(401).send("user not found");
        const isValid = await compare(password, user.password);
        if (!isValid)
            return res.status(401).send("Invalid password credentials");
        return res.status(200).json({ message: "OK ", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        // throw new Error('Error getting users');
        return res.status(200).json({ message: "Error ", cause: error.message });
    }
    ;
};
//# sourceMappingURL=user-controllers.js.map