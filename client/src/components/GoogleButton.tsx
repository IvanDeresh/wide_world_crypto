"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/pages/profile";
  return (
    <div
      className="text-white cursor-pointer leading-6 flex flex-col justify-center items-center"
      onClick={() => signIn("google", { callbackUrl })}
    >
      Sign in with Google
      <div className="w-[200px] h-2 rounded-full bg-green-500"></div>
    </div>
  );
};

export default GoogleButton;
