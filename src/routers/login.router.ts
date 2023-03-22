import { Router } from "express";
import { createSessionController } from "../controllers/login/createSession";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValidMiddleware";
import { createSessionSchema } from "../schemas/login.schema";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(createSessionSchema),
  createSessionController
);
