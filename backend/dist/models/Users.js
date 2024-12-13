import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: { type: String, default: randomUUID },
    role: { type: String, required: true },
    content: { type: String, required: true },
});
const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    chats: [chatSchema],
});
export const User = mongoose.model('User', userSchema);
//# sourceMappingURL=Users.js.map