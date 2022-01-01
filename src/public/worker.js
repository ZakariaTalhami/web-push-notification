self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.data.title, // title of the notification
        {
            body: data.data.body, //the body of the push notification
            icon: "https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png" // icon 
        }
    );
});