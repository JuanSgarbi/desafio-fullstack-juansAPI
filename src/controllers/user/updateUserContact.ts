import { Request, Response } from "express";
import { IContactId } from "../../interfaces/user";
import { updateUserContactService } from "../../services/user/updateUserContact";

export const updateUserContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.user.id;
  const userData: IContactId = req.body;

  const data = await updateUserContactService(userId, userData);

  return res.json(data);
};
