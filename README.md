# Firebase Cloud Messaging with ReactPWA

Here is a simple implementation of Firebase Cloud Messaging with React-PWA.

Clone the repo: `git@github.com:hernandez87v/react-three-fiber.git && cd pwa-fcm`

Install firebase CLI:
`npm install -g firebase-tools`

Deploy to Firebase Hosting:

1. `firebase login`
2. `firebase init`
3. `firebase deploy`

Make the following necessary changes:

1. Update GCM-Sender ID in `public/manifest.json`.
2. Update the Firebase Config in `public/firebase-messaging-sw.js`.
3. Update the Firebase Config in `fcm-config.js`.

Run using `npm i && npm start`

Open the browser (`http://localhost:3003`) with **Developer Tools** and note the `Current Token` from the console.

Go to the [Firebase Notification Tester](https://firebase.google.com/docs/cloud-messaging/js/first-message) and open **Notification Composer**.

Paste the **token** and send the _Test Notification_

###### boiler plate by yash-thakur
