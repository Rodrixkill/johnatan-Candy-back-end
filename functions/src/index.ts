 import * as functions from "firebase-functions";
 import { App } from './app'
//  const admin = require('firebase-admin');
//  admin.initializeApp();
 


 async function main() {
     const app = new App(8443);
     await app.listen();
     exports.app=functions.https.onRequest(app.express);
  }
    
 main();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
