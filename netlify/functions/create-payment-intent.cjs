require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Permitir todas as origens (você pode restringir para origens específicas se necessário)
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",  // Métodos permitidos (GET, POST, etc.)
      },
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error: error.message });

    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
