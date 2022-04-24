import joi from "joi";

const registerSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.valid(joi.ref("password")).required(),
});

export default registerSchema;