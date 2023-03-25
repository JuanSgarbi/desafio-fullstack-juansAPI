import { Request, Response } from "express";
import { retrieveUserService } from "../../services/user/retrieveUser";

export const retieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.params.id;
  const data = await retrieveUserService(userId);
  return res.json(data);
};
