import { Request, Response, NextFunction } from 'express';
import { User } from "../models/Users.js";

export const getAllUsers = async (
    req:Request ,
    res:Response,
    next: NextFunction
) => {
    try {
        const users = await User.find();
        return res.status(200).json( {message : "OK " ,users});
    } catch (error) {
        console.log(error);
        // throw new Error('Error getting users');
        return res.status(200).json( {message : "Error " , error});
    }; 
}