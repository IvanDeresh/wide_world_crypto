import React from "react";
import Image from "next/image";
import { gold, medium, tryperiod } from "@/assets/img";
import Link from "next/link";
const SubscribeWindow = () => {
  return (
    <div className="text-black items-center p-5 gap-5 flex flex-col justify-center">
      <div className="w-full gap-5 flex flex-col">
        <div className="flex items-center justify-around border-2 rounded-2xl h-[70px]">
          <Image className="w-[50px] h-[50px]" src={tryperiod} alt="trial" />
          Trial period
          <div className="text-green-400">0$</div>
        </div>
        <div className="flex items-center justify-around border-2 rounded-2xl h-[70px]">
          <Image className="w-[50px] h-[50px]" src={medium} alt="medium" />
          Medium
          <div className="text-green-400">20$</div>
        </div>
        <div className="flex items-center justify-around border-2 rounded-2xl h-[70px]">
          <Image className="w-[50px] h-[50px]" src={gold} alt="premium" />
          Premium
          <div className="text-green-400">30$</div>
        </div>
      </div>
      <Link
        href="/"
        className="text-blue-300 hover:underline-offset-4 hover:underline "
      >
        See more
      </Link>
    </div>
  );
};

export default SubscribeWindow;
