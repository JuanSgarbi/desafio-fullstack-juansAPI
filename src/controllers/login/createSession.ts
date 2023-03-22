import { Request, Response } from "express";
import { ILogin } from "../../interfaces/login";
import { createSessionService } from "../../services/login/createSession";

export const createSessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: ILogin = req.body;
  const token = await createSessionService(loginData);

  return res.json({ token });
};
