import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME, } from "./constants";

export const createToken = (id: string, email: string, expiresIn: string) => {
  const JWT_SECRET_kEY : any = process.env.JWT_SECRET ;
  const payload = { id, email };
  const token = jwt.sign(payload, JWT_SECRET_kEY, {
    expiresIn,
  });
  return token;
};

export const verifyToken = async (req: Request,res: Response,next: NextFunction) => {
  const JWT_SECRET_kEY : any = process.env.JWT_SECRET ;
  const token = req.signedCookies[`${COOKIE_NAME}`];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received" });
  }
  return new Promise<void>((resolve, reject) => {
    return jwt.verify(token, JWT_SECRET_kEY, (err : any, success: any) => {
      if (err) {
        reject(err.message);
        return res.status(401).json({ message: "Token Expired" });
      } else {
        resolve();
        res.locals.jwtData = success;
        return next();
      }
    });
  });
};