import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUser";
import { deleteUserContactService } from "../../services/user/deleteUserContact";

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.params.id;

  await deleteUserService(userData);

  return res.status(204).json();
};
