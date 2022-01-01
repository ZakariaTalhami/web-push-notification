import { Request, Response } from "express";
import { MessageContent } from "../models/message";
import { publishMessage } from "../services/messagingService";
import { getSubscriptions } from "../services/subscriptionService";


export async function sendMessage(req: Request, res: Response) {
    const { body, title } = req.body as Pick<MessageContent, 'body' | 'title'>;

    const message: MessageContent = {
        title, 
        body
    }

    const subscriptions = await getSubscriptions();

    await publishMessage(message, subscriptions);

    res.status(200).send();
}