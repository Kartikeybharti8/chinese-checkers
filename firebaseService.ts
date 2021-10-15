var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");//key to datbase

const db = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://practfirebase-2ddef-default-rtdb.firebaseio.com"
}).firestore();

export default admin;
export {db};

