import { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("session_id")) {
      // You can retrieve the session from Stripe if needed
      const sessionId = query.get("session_id");
      console.log(`Payment succeeded! Session ID: ${sessionId}`);
      // Here you can verify the session ID, fetch more details, and update your app.
    }
  }, []);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your subscription has been confirmed. Thank you for your payment!</p>
    </div>
  );
};

export default Success;
