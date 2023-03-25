import { Request, Response } from "express";
import { IUpdateUser } from "../../interfaces/user";
import { updateUserService } from "../../services/user/updateUser";

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.params.id;
  const userData: IUpdateUser = req.body;
  const data = await updateUserService(userId, userData);
  return res.json(data);
};
