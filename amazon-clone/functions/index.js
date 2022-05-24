const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51L2dCcIsKU9f2xIxrE6VALuW8XRscXV5kejgKSvEzXvZCgzZ2UK09GUcD9Krs1AbYjQ039qHNkhE19xGWYR9HeU500QYU7ZRjh"
);

// API:

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint:
// http://localhost:5001/clone-6c11d/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
