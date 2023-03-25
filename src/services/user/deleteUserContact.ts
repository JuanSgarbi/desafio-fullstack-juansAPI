import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const deleteUserContactService = async (userData: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ id: userData });

  await userRepository.delete({ id: findUser!.id });

  return;
};
