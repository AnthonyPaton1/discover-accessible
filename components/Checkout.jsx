import React from "react";

const CheckoutButton = () => {
  const handleCheckout = async () => {
    // Call your API to create a Checkout session
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
    });
    const session = await response.json();

    // Redirect to the Stripe Checkout page
    window.location.href = session.url;
  };

  return (
    <button
      onClick={handleCheckout}
      style={{ padding: "10px", backgroundColor: "#556cd6", color: "white" }}
    >
      Checkout for £60 Annually
    </button>
  );
};

export default CheckoutButton;
