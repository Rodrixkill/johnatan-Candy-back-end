import * as functions from "firebase-functions";
import { App } from './app'
//  const admin = require('firebase-admin');
//  admin.initializeApp();
 
const app = new App(8443)
app.listen();

export const crunchylist = functions.https.onRequest(app.express)

//  async function main() {
//      const app = new App(8443);
//      await app.listen();
//   }
    
//  main();
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const crunchylist = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
