"use strict";
exports.__esModule = true;
exports.db = void 0;
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json"); //key to datbase
var db = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://practfirebase-2ddef-default-rtdb.firebaseio.com"
}).firestore();
exports.db = db;
exports["default"] = admin;
