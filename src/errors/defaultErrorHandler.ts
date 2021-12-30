import { NextFunction, Request, Response } from "express";

export async function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction // eslint-disable-line
) {
  console.error(err.stack);
  res.status(500).send({
    message: err.message,
    stack: err.stack,
  });
}
