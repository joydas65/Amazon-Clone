const functions = require('firebase-functions');

const express = require('express');

const cors = require('cors');

const stripe = require('stripe')('sk_test_51Hn3CEHxiZnNvcEfZ487gus6EeLLLt5eBPU2V1cFhVf0KaeA546fTHu6CvHm4OjcMTcNQMRr9ycpGhmJmy3vqEQ100lhA4aCq2');

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

//app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-299c9/us-central1/api
