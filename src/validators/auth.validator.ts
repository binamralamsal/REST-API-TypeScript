import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().trim().min(3).max(255).required(),
  email: Joi.string().email().lowercase().trim().min(3).max(255).required(),
  password: Joi.string().min(6).max(255).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().min(3).max(255).required(),
  password: Joi.string().min(6).max(255).required(),
});
