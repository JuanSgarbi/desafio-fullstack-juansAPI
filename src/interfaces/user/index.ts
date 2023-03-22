import { z } from "zod";
import {
  createUserSchema,
  returnedUserSchema,
} from "../../schemas/user.schema";

export type ICreateUser = z.infer<typeof createUserSchema>;
export type IReturnUser = z.infer<typeof returnedUserSchema>;
