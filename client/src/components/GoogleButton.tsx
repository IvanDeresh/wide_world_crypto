"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/pages/profile";
  return (
    <div
      className=" bg-white text-black cursor-pointer w-[300px] h-[70px] rounded-3xl text-[22px] leading-6 flex flex-col justify-center items-center"
      onClick={() => signIn("google", { callbackUrl })}
    >
      Sign in with Google
    </div>
  );
};

export default GoogleButton;
