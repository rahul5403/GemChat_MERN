import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.signedCookies["auth_token"];
    if (!token || token.trim() === "") {
      return res.status(401).json({ message: "Token not received" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.jwtData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token expired or invalid" });
  }
};

