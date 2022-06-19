import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { User } from '../Models'

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
};

export const checkPassword = async (inputPassword: string, storedPassword: string) => {
    return await bcrypt.compare(inputPassword, storedPassword);
};

export const createNewUser = async (firstName: string, lastName: string, email: string, username: string, password: string) => {
    const passwordHash: string = await hashPassword(password);
    return await User.create({ firstName, lastName, email, username, password: passwordHash });
};

export const generateAccessToken = (userId: string) => {
    return jwt.sign({ userId }, String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: String(process.env.ACCESS_TOKEN_EXPIRY)});
};

export const isAuthenticated = (authToken: string): void => {
    jwt.verify(authToken, String(process.env.ACCESS_TOKEN_SECRET), (error: any) => {
        if (error) throw new Error("Unauthorised");
    });
    return;
};