const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const dotenv = require("dotenv");
dotenv.config()
// Frontend uses import.meta.env (Vite), backend uses process.env with dotenv and we need dotenv.config() for that
const stripe = require("stripe")(process.env.STRIPE_KEY);

const cors = require("cors");
const express = require("express")

const app = express()
// It allows any frontend (React, etc.) to make requests to our backend
app.use(cors({origin:true}))

app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).json({message: "success!"})
})




// as we use firebase,this substitutes app.listen
exports.api = onRequest(app)