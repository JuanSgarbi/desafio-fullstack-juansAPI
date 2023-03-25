import { Router } from "express";
import { createUserController } from "../controllers/user/createUser";
import { deleteUserController } from "../controllers/user/deleteUser";
import { listUsersController } from "../controllers/user/listUsers";
import { retieveUserController } from "../controllers/user/retrieveUser";
import { updateUserController } from "../controllers/user/updateUser";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValidMiddleware";
import { ensureUserIsAuthMiddleware } from "../middlewares/ensureUserIsAuthMiddleware";
import { verifyEmailAlreadyExistMiddleware } from "../middlewares/verifyEmailAlreadyExistMiddleware";
import { createUserSchema } from "../schemas/user.schema";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  verifyEmailAlreadyExistMiddleware,
  createUserController
);
userRoutes.get("", ensureUserIsAuthMiddleware, listUsersController);
userRoutes.get("/:id", retieveUserController);
userRoutes.patch(
  "/:id",
  ensureUserIsAuthMiddleware,
  verifyEmailAlreadyExistMiddleware,
  updateUserController
);
userRoutes.delete("/:id", ensureUserIsAuthMiddleware, deleteUserController);
