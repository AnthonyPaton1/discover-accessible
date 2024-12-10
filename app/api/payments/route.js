import stripePackage from "stripe";
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create Checkout Session
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: "prod_RHKycr2XlPEVHZ",
            quantity: 1,
          },
        ],
        mode: "subscription", // Subscription mode for recurring payments
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`, // Redirect URL on success
        cancel_url: `${req.headers.origin}/cancelled`, // Redirect URL on cancel
      });

      // Respond with the session URL to redirect the customer
      res.status(200).json({ url: session.url });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
