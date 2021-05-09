import * as functions from "firebase-functions";
import { App } from './app'
 
const app = new App(8443)
app.listen();

export const crunchylist = functions.https.onRequest(app.express)

//  async function main() {
//      const app = new App(8443);
//      await app.listen();
//   }
    
//  main();
