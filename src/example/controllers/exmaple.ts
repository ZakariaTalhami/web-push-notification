import { Request, Response } from "express";

export async function sayHellow(req: Request, res: Response) {
  res.status(200).send({
      message: "Hello, World!"
  });
}
