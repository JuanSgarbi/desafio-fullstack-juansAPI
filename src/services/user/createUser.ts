import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser, IReturnUser } from "../../interfaces/user";

import { returnedUserSchema } from "../../schemas/user.schema";

export const createUserService = async (userData: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({
    ...userData,
  });

  await userRepository.save(user);

  const validatedReturn = returnedUserSchema.parse(user);
  return validatedReturn;
};
