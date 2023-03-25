import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUpdateUser } from "../../interfaces/user";
import { returnedUserSchema } from "../../schemas/user.schema";

export const updateUserService = async (
  userId: string,
  userdata: IUpdateUser
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: userId });

  const userChanges = { ...userdata };

  Object.assign(findUser!, userChanges);

  await userRepository.save(findUser!);

  const returnedUser = returnedUserSchema.parse(findUser);

  return returnedUser;
};
