import { Request, Response } from "express";
import { listUsersService } from "../../services/user/listUser";

export const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.user.id;
  const data = await listUsersService(userId);
  return res.json(data);
};
