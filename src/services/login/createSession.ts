import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { ILogin } from "../../interfaces/login";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const createSessionService = async (
  loginData: ILogin
): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ email: loginData.email });

  if (!findUser) {
    throw new AppError("Invalid credentials", 401);
  }

  const validatePassword = await compare(loginData.password, findUser.password);

  if (!validatePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(findUser.id),
  });

  return token;
};
