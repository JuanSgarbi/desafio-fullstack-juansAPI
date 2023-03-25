import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IContactId } from "../../interfaces/user";
import { returnedUserSchema } from "../../schemas/user.schema";

export const updateUserContactService = async (
  userId: string,
  userData: IContactId
) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });
  const findContact = await userRepository.findOneBy({ id: userData.id });

  const updateContact = userRepository.create({
    ...findContact,
    clientId: findUser!.id,
  });

  await userRepository.save(updateContact);

  const updatedUser = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });

  const returnedUser = returnedUserSchema.parse(updatedUser);

  return returnedUser;
};
