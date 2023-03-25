import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  contactIdSchema,
  createUserSchema,
  returnedUserSchema,
} from "../../schemas/user.schema";

export type ICreateUser = z.infer<typeof createUserSchema>;
export type IReturnUser = z.infer<typeof returnedUserSchema>;
export type IUpdateUser = DeepPartial<ICreateUser>;
export type IContactId = z.infer<typeof contactIdSchema>;
