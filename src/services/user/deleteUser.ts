import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const deleteUserService = async (userData: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findContact = await userRepository.findOneBy({ id: userData });

  await userRepository.delete({ id: findContact!.id });

  return;
};
