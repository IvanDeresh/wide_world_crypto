"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import CheckoutForm from "@/components/CheckoutForm";
import React from "react";
import dotenv from "dotenv";
dotenv.config();
function Payment() {
  const searchParam = useSearchParams();
  const amount = searchParam.get("amount");
  const parsedAmount = amount ? parseFloat(amount) : 0;

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY!
  );

  const options = {
    currency: "usd",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={parsedAmount} />
    </Elements>
  );
}
