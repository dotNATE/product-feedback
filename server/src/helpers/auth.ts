import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const checkPassword = async (inputPassword: string, storedPassword: string) => {
    return await bcrypt.compare(inputPassword, storedPassword);
};

export const generateAccessToken = (userId: string) => {
    const secret: string = process.env.ACCESS_TOKEN_SECRET || 'secret';
    const expiry: string = process.env.ACCESS_TOKEN_EXPIRY || '1s';

    return jwt.sign({ userId }, secret, { expiresIn: expiry});
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