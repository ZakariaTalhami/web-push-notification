import webpush from 'web-push';
import { MessageContent, PushMessage } from "../models/message";
import { Subscription } from "../models/subscription";
import { deleteSubscriptions } from './subscriptionService';

export async function publishMessage(message: MessageContent, subscriptionList: Subscription[]) {
    const expiredSubscriptions: number[] = [];

    await Promise.all(subscriptionList.map(async (sub, index) => {
        try {
            await sendMessageToSubscription(message, sub);
        } catch (error) {
            expiredSubscriptions.push(index);
        }
    }));

    if(expiredSubscriptions.length !== 0)
        await deleteSubscriptions(expiredSubscriptions);
}

export async function sendMessageToSubscription(message: MessageContent, subscription: Subscription) {
    const payload: PushMessage = {
        data: message,
        date: new Date()
    };

    const stringifiedPayload = JSON.stringify(payload);

    return await webpush.sendNotification(subscription, stringifiedPayload);
}