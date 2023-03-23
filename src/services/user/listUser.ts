import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { returnedAllUserSchema } from "../../schemas/user.schema";

export const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const userList = await userRepository.find({ relations: { contacts: true } });

  const returnedUserList = returnedAllUserSchema.parse(userList);
  return returnedUserList;
};
