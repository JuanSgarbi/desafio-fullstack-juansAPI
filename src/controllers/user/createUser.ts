import { Request, Response } from "express";
import { ICreateUser } from "../../interfaces/user";
import { createUserService } from "../../services/user/createUser";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: ICreateUser = req.body;
  const data = await createUserService(userData);
  return res.status(201).json(data);
};
