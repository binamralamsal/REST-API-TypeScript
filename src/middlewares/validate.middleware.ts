import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions";
import Joi from "joi";

const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, _: Response, next: NextFunction) => {
    const { value, error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error)
      throw new HttpException(422, error.message, { details: error.details });

    req.body = value;
    next();
  };
};

export default validate;
