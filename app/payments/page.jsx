"use client";
import React from "react";

export default function Payments() {
  const handleCheckout = async () => {
    const response = await fetch("/api/payments", {
      method: "POST",
    });
    const { url } = await response.json();
    window.location.href = url; // Redirect to Stripe Checkout
  };

  return (
    <div className="payment-container">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full
         focus:outline-none focus:shadow-outline "
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}
