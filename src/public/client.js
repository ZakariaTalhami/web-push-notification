const publicVapidKey = '<public-vapid-key>';

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
} 

if('serviceWorker' in navigator){
    subscribe().catch(err => console.error(err));
}

//register the service worker, register push api, send the notification
async function subscribe(){
    //register service worker
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });

    let subscription = await register.pushManager.getSubscription();
    
    // check if already subscribed
    if (!subscription) {
        subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
    
            //public vapid key
            applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
        });
    }
   
    //Send push notification
    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify({
            subscription: subscription
        }),
        headers: {
            "content-type": "application/json"
        }
    });
}