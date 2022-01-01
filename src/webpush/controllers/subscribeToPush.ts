import { Request, Response } from "express";
import { Subscription } from "../models/subscription";
import { saveSubscription } from "../services/subscriptionService";

export async function subscribe(req: Request, res: Response) {
  const { subscription } = req.body;
  const subObject = subscription as Subscription;
  
  await saveSubscription(subObject);

  res.status(200).send();
}
