import { Router } from "express";
import { createUserController } from "../controllers/user/createUser";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValidMiddleware";
import { createUserSchema } from "../schemas/user.schema";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);

userRoutes.get("");
