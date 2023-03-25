import { Request, Response } from "express";
import { deleteUserContactService } from "../../services/user/deleteUserContact";

export const deleteUserContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.params.id;

  await deleteUserContactService(userData);

  return res.status(204).json();
};
