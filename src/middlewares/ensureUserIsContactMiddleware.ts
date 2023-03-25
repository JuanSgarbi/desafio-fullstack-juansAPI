import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

export const ensureUserIsContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const userClient = await userRepository.findOneBy({ id: req.user.id });

  if (!userClient!.is_client)
    throw new AppError("This user is not a  Client", 401);

  const userContact = await userRepository.findOneBy({ id: req.body.id });

  if (!userContact) throw new AppError("User not found", 404);

  if (userContact.clientId && userContact.clientId !== userClient!.id)
    throw new AppError("This client does not own this contact", 401);

  return next();
};
