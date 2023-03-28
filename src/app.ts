import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "./errors";
import { userRoutes } from "./routers/user.router";
import { loginRoutes } from "./routers/login.router";
import { userContactRoutes } from "./routers/contact.router";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contact", userContactRoutes);

app.use(errorHandler);

export default app;
