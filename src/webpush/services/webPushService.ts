import webpush from 'web-push';

const VAPID_EMAIL = process.env.WEB_PUSH_VAPID_EMAIL ?? "";
const PUBLIC_KEY = process.env.WEB_PUSH_PUBLIC_KEY ?? "";
const PRIVATE_KEY = process.env.WEB_PUSH_PRIVATE_KEY ?? "";

export async function initWebpush() {

    if(VAPID_EMAIL === "") 
        console.warn("WARN: Web push VAPID email is not set");
    if(PUBLIC_KEY === "") 
        console.warn("WARN: Web push VAPID public key is not set");
    if(PRIVATE_KEY === "") 
        console.warn("WARN: Web push VAPID private key is not set");
        
    
    webpush.setVapidDetails(
        `mailto:${VAPID_EMAIL}`,
        PUBLIC_KEY,
        PRIVATE_KEY
    );
}
