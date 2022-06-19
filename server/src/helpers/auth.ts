import jwt from "jsonwebtoken";

export const isAuthenticated = (authToken: string): void => {
    jwt.verify(authToken, String(process.env.ACCESS_TOKEN_SECRET), (error: any) => {
        if (error) throw new Error("Unauthorised");
    });
    return;
};