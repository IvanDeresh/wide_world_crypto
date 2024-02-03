"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function PaymentConfirmation() {
  const route = useRouter();
  return (
    <div
      className="bg-[#f1f1f1] flex
    h-screen
    items-center justify-center flex-col"
    >
      <h2 className="text-[30px] z-20 mt-[-30px]">Payment Confimed</h2>
      <div className="w-[100%] h-[0] pb-[100%] relative;">
        <iframe
          src="https://giphy.com/embed/UtTQVHfCxM8unTEdTM"
          width="100%"
          height="100%"
          className="absolute giphy-embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/paramountplus-beavis-and-butthead-butt-head-UtTQVHfCxM8unTEdTM">
          via GIPHY
        </a>
      </p>
      <h2
        className="font-bold 
        text-[23px] mt-[-20px] mb-10"
      >
        transaction successfull
      </h2>
      <button
        className="p-2 bg-black text-white
        px-10 rounded-lg"
        onClick={() => route.push("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default PaymentConfirmation;
