import { Request, Response } from "express";
import { listUsersService } from "../../services/user/listUser";

export const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = await listUsersService();
  return res.json(data);
};
