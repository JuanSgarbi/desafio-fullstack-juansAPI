import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";

export const verifyEmailAlreadyExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findEmail = await userRepository.findOneBy({ email: req.body.email });

  if (findEmail) throw new AppError("This email already in use", 401);

  return next();
};
