"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    try {
      if (
        formData.username !== "" &&
        formData.password !== "" &&
        formData.email !== ""
      ) {
        const response = await axios.post(
          "http://localhost:3003/auth/registration",
          formData
        );
        const { message, user } = response.data;

        window.alert(message + " " + user.user.username);
      } else {
        window.alert("Fields cannot be empty");
      }
    } catch (error: any) {
      console.log(error);
      window.alert(
        "Error registration user" + " . " + error.response.data.message
      );
    }
  };

  return (
    <div className="h-screen justify-center flex items-center">
      <div className="flex justify-center items-center  border-2 w-[500px] max-sm:w-[400px] max-sm:h-[500px] h-[600px] rounded-3xl">
        <div className="flex flex-col items-center justify-around h-[70%]">
          <div className="flex flex-col items-center">
            <div className="text-[30px] font-montserrat">Registration</div>
            <div className="w-[150px] h-[10px] bg-white rounded-full"></div>
          </div>
          <div className="flex flex-col items-center gap-[10px] mt-[50px]">
            <input
              className="h-[50px] p-[10px] w-[400px] max-sm:w-[300px] text-slate-400 rounded-full focus:outline-none"
              type="text"
              placeholder="Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="h-[50px] p-[10px] w-[400px] max-sm:w-[300px] text-slate-400 rounded-full focus:outline-none"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="h-[50px] p-[10px] w-[400px] max-sm:w-[300px] text-slate-400 rounded-full focus:outline-none"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-[150px] mb-[20px] mt-[50px] h-[50px] border-2 rounded-3xl font-montserrat text-[20px]"
          >
            Confirm
          </button>

          <div className="flex justify-around w-[100%]">
            <Link
              href="/"
              className="text-[25px] underline underline-offset-[8px] decoration-[4px]"
            >
              Google
            </Link>
            <Link
              className="text-[25px] underline underline-offset-[8px] decoration-[4px]"
              href="/pages/sign-in/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
