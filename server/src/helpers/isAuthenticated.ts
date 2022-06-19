import jwt from "jsonwebtoken";

export default (authToken: string): void => {
    jwt.verify(authToken, String(process.env.ACCESS_TOKEN_SECRET), (error: any) => {
        if (error) throw new Error("Unauthorised");
    });
    return;
};