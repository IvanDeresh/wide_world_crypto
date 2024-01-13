import React from "react";
import Link from "next/link";
import GoogleButton from "@/components/GoogleButton";

const page = () => {
  return (
    <div className="h-screen max-container flex font-montserrat justify-center items-center">
      <div className="border-2 w-[400px] flex flex-col h-[500px] rounded-3xl justify-around items-center">
        <div className="h-[60%] w-[100%] items-center flex flex-col justify-around">
          <div className="flex flex-col items-center">
            <h1 className="text-[30px] font-montserrat ">Choose method</h1>
            <div className="w-[150px] h-[7px] rounded-full bg-white"></div>
          </div>
          <div className=" flex justify-center items-center font-bold text-[25px] rounded-2xl  w-[80%] h-[50px] border-2">
            Google
          </div>
          <Link
            href="/pages//sign-in/registration"
            className=" flex justify-center items-center font-bold text-[25px] rounded-2xl  w-[80%] h-[50px] border-2"
          >
            Registration
          </Link>
          <Link
            href="/pages//sign-in/login"
            className=" flex justify-center items-center font-bold text-[25px] rounded-2xl  w-[80%] h-[50px] border-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
