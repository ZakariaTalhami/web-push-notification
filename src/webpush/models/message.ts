export interface MessageContent {
    title: string,
    body: string
}

export interface PushMessage {
    data: MessageContent,
    date: Date
}