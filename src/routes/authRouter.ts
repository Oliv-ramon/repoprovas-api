import { Router } from "express";

import * as authController from "../controllers/authControler.js"
import { schemaValidationMiddleware } from "../middlewares/index.js";
import { registerSchema } from "../schemas/index.js";

const authRouter = Router();
authRouter.post(
  "/auth/register", 
  schemaValidationMiddleware(registerSchema), 
  authController.register
);

export default authRouter;