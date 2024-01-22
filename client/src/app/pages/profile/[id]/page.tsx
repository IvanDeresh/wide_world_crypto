"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
const page = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="h-screen flex justify-center items-center">
      {session.data?.user ? (
        <div className="border-2 rounded-3xl flex-col w-[400px] h-[300px] flex gap-[20px] justify-center  items-center">
          <div className="flex w-[] gap-[20px]">
            <div className="border-2 h-[65px] flex justify-center items-center rounded-3xl w-[80px]">
              <Image
                alt="photo"
                src={session.data?.user?.image!}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="border-2  h-[65px] flex gap-[10px] justify-center items-center rounded-3xl w-[200px]">
              <span>Role:</span> USER
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="w-[300px]  h-[50px] border-2 flex justify-around items-center rounded-2xl">
              {session.data?.user?.name}
            </div>
            <div className="w-[300px]  h-[50px] border-2 flex justify-around items-center rounded-2xl">
              {session.data?.user?.email}
            </div>
          </div>
          <button
            className="w-[150px]  duration-300 hover:bg-[#9caece] h-[50px] rounded-3xl border-2"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Log out
          </button>
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
