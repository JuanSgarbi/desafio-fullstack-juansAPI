import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreateUser, IReturnUser } from "../../interfaces/user";
import { PhoneNumber } from "../../entities/phoneNumber.entity";
import { returnedUserSchema } from "../../schemas/user.schema";

export const createUserService = async (userData: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const phoneNumberRepository = AppDataSource.getRepository(PhoneNumber);

  const user = userRepository.create({
    full_name: userData.full_name,
    email: userData.email,
    password: userData.password,
    phone_numbers: [],
    is_client: userData.is_client,
  });

  await userRepository.save(user);
  console.log(user);
  userData.phone_numbers.map(async (el) => {
    const newNumber = phoneNumberRepository.create({
      ...el,
      user: user,
    });
    await phoneNumberRepository.save(newNumber);
    user.phone_numbers.push(newNumber);
    await userRepository.save(user);
    return console.log("aqui");
  });

  const findNumbers = await phoneNumberRepository.find({
    relations: { user: true },
  });

  const users = findNumbers.filter((el) => console.log(el.user.id, user.id));
  console.log(users);
  const { user: userFind } = users[0];

  // const validatedReturn = returnedUserSchema.parse(user);

  return userFind;
};
