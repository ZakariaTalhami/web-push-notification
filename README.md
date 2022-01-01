# Web Push Notification Prototype

This is prototype that aims to experiment and test the application of push notifications. The prototype uses the [web-push](https://github.com/web-push-libs/web-push) package in the backend. A service worker on the frontend is used to process the notifications and display them to the user.

## Prerequisites

To run this prototype, the following are needed:
* NodeJS installed.
* NPM intalled.
* A IDE or text editor of your choice.

## Installing the Prototype

To install the prototype run the following command

```shell
npm install
```

## How to use

### Setting up the VAPID Keys

For the push notification to work a pair of VAPID public and private keys will be needed. For the backend these will be set in the environment variables.

Copy the `exmaple.env` file and rename to `.env`;

To generate the VAPID keys run the following command:

``` Shell
npm run generate:vapid
```

The above command will output the keys on the console, copy and paste these keys into the `.env` file. 

Also, The public key will need to be set in the UI code as well. Open `src\public\client.js` and replace the following with the public key value.
```js
// src\public\client.js
const publicVapidKey = '<public-vapid-key>';
```

### Run the server

To run the server, run the following command:

```shell
npm start
```

### Testing Push Notifications

Open the UI at `http://localhost:4000/`, allow notifications when prompted. This will then subscribe to the push service and send the subscription object (containing the endpoint) to the server.

To send a message perform the following:
```shell
curl -X POST -H "Content-Type: application/json"     -d '{"title": "Testing Notification", "body": "Testing notification functionality"}' http://localhost:4000/send-message
```

Note, If the PORT variable was changed in the `.env` file, the URL above should reflect that as well.

After runn ing the above command a notification should appear with the title and body provided above.

## Resources
* [Getting Started with Push Notifications in Node.js using Service Workers](https://www.section.io/engineering-education/push-notification-in-nodejs-using-service-worker/#coding-the-client-side)
* [Progressive Web Apps Training: Introduction to Push Notifications](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications)