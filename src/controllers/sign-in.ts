import { NextFunction, Request, Response } from "express";
import { userData } from "../services";
const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  try {
    const checkEmailInDb = await userData.getUserDataByEmail(userInfo);
    if (checkEmailInDb) {
    }
  } catch (e: any) {
    next(e);
  }
};

export { signIn };
