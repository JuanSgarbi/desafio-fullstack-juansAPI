import { Router } from "express";
import { deleteUserContactController } from "../controllers/user/deleteUserContact";
import { updateUserContactController } from "../controllers/user/updateUserContact";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValidMiddleware";
import { ensureUserIsAuthMiddleware } from "../middlewares/ensureUserIsAuthMiddleware";
import { ensureUserIsContactMiddleware } from "../middlewares/ensureUserIsContactMiddleware";
import { contactIdSchema } from "../schemas/user.schema";

export const userContactRoutes: Router = Router();

userContactRoutes.patch(
  "",
  ensureUserIsAuthMiddleware,
  ensureUserIsContactMiddleware,
  ensureDataIsValidMiddleware(contactIdSchema),
  updateUserContactController
);

userContactRoutes.delete(
  "/:id",
  ensureUserIsAuthMiddleware,
  ensureUserIsContactMiddleware,
  deleteUserContactController
);
