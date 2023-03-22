import { z } from "zod";
import { createSessionSchema } from "../../schemas/login.schema";

export type ILogin = z.infer<typeof createSessionSchema>;
