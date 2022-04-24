import { Router } from "express";

import * as userController from "../controllers/userControler.js"
import { schemaValidationMiddleware } from "../middlewares/index.js";
import { loginSchema, registerSchema } from "../schemas/index.js";

const userRouter = Router();
userRouter.post(
  "/users", 
  schemaValidationMiddleware(registerSchema), 
  userController.create
);

userRouter.post(
  "/users/login", 
  schemaValidationMiddleware(loginSchema), 
  userController.login
);

export default userRouter;