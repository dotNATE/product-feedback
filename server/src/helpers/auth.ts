import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const checkPassword = async (inputPassword: string, storedPassword: string) => {
    return await bcrypt.compare(inputPassword, storedPassword);
};

export const generateAccessToken = (userId: string) => {
    return jwt.sign({ userId }, String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: String(process.env.ACCESS_TOKEN_EXPIRY)});
};

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
};

export const isAuthenticated = (authToken: string): void => {
    jwt.verify(authToken, String(process.env.ACCESS_TOKEN_SECRET), (error: any) => {
        if (error) throw new Error("Unauthorised");
    });
    return;
};