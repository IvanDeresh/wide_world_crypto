"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const page = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="h-screen flex justify-center items-center">
      {session.data?.user ? (
        <div className="border-2 rounded-3xl w-[400px] h-[300px] flex justify-around  items-center">
          <Image
            alt="photo"
            src={session.data?.user?.image!}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <div>{session.data?.user?.name}</div>
            <div>{session.data?.user?.email}</div>
          </div>
        </div>
      ) : (
        <button
          className="w-[200px] hover:translate-y-[-2px] h-[75px] text-[20px] border-2 rounded-2xl shadow-2xl shadow-white"
          onClick={() => router.push("/pages/sign-in/login")}
        >
          Go to login page
        </button>
      )}
    </div>
  );
};

export default page;
