import { Router } from "express";

import * as userController from "../controllers/userControler.js"
import { schemaValidationMiddleware } from "../middlewares/index.js";
import { registerSchema } from "../schemas/index.js";

const userRouter = Router();
userRouter.post(
  "/users", 
  schemaValidationMiddleware(registerSchema), 
  userController.register
);

export default userRouter;