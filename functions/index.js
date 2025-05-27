const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const dotenv = require("dotenv");
dotenv.config()
// Frontend uses import.meta.env (Vite), backend uses process.env with dotenv and we need dotenv.config() for that
const stripe = require("stripe")(process.env.STRIPE_KEY);

const cors = require("cors");
const express = require("express");
const { setGlobalOptions } = require("firebase-functions/options");

const app = express()

setGlobalOptions({maxInstances:10})
// It allows any frontend (React, etc.) to make requests to our backend
app.use(cors({origin:true}))

app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json({message: "success!"})
})

// request related to payment
app.post("/payments/create", async(req,res) => {
    
  // create a Stripe PaymentIntent with a specified amount, and send its client secret to the frontend so the user can complete the payment.
  const total = parseInt(req.query.total);

  if (total > 0) {
    const paymentIntentResponse = await stripe.paymentIntents.create({
      amount: total,
      currency: "cad",
    });
    // console.log(paymentIntentResponse)

    res.status(201).json({clientSecret:paymentIntentResponse.client_secret});
  } else {
    res.status(403).json({ message: "Total must be greater than 0" });
  }
})


// as we use firebase,this substitutes app.listen
exports.api = onRequest(app)