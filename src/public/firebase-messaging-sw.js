importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js');

firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: 'AIzaSyAezEhrpTSbXVhiaw-ORD0UJrIvAxyItp8',
  authDomain: 'react-three-fibre.firebaseapp.com',
  databaseURL: 'https://react-three-fibre.firebaseio.com',
  projectId: 'react-three-fibre',
  storageBucket: 'react-three-fibre.appspot.com',
  messagingSenderId: '1098227852996',
  appId: '1:1098227852996:web:952cbf5824479db65a4b91',
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification('my notification title');
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
  // do what you want
  // ...
});
