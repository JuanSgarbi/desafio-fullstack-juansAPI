import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import {
  returnedAllUserSchema,
  returnedUserSchema,
} from "../../schemas/user.schema";

export const listUsersService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });

  const returnedUser = returnedUserSchema.parse(user);
  return returnedUser;
};
