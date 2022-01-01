import { Subscription } from "../models/subscription";

const SUBSCRIPTIONS: Subscription[] = [];

export async function deleteSubscriptions(subIndex: number): Promise<void>;
export async function deleteSubscriptions(subIndex: number[]): Promise<void>;
export async function deleteSubscriptions(subIndex: any): Promise<void> {
    let indices: number[] = subIndex;
    if (Number.isInteger(subIndex)) {
        indices = [subIndex];
    }
    
    for (let i = indices.length - 1; i >= 0; i--) {
        SUBSCRIPTIONS.splice(indices[i], 1);
    }
}

export async function saveSubscription(subscription: Subscription) {
  SUBSCRIPTIONS.push(subscription);
}

export async function getSubscriptions() {
  return SUBSCRIPTIONS;
}
