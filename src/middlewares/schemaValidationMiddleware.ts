import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

import * as errorUtils from "../utils/errorUtils.js"

export default function schemaValidationMiddleware(schema: Schema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errorMessages = validation.error.details.map(({message}) => message).join(", ");
      const errorMessage = `Error(s): ${errorMessages}`;

      throw errorUtils.unprocessableEntityError(errorMessage);
    }

    next();
  }
}