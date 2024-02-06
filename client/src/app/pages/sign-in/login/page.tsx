"use client";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3003/auth/login",
        formData
      );
      const { message, data } = response.data;

      if (data.tokens) {
        localStorage.setItem("token", data.tokens.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert(`${message} ${data.user.username}`);
        router.replace(`/pages/profile`);
      } else {
        window.alert(message);
      }
    } catch (error: any) {
      window.alert("Error login user" + " . " + error);
    }
  };
  return (
    <div className="h-screen justify-center flex items-center">
      <div className="flex justify-center items-center border-2 w-[500px] h-[600px] max-sm:w-[400px] max-sm:h-[500px] max rounded-3xl">
        <div className="flex flex-col items-center justify-around h-[70%]">
          <div className="flex flex-col items-center">
            <div className="text-[30px] font-montserrat">Login</div>
            <div className="w-[150px] h-[10px] bg-white rounded-full"></div>
          </div>
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
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            onClick={() => handleSubmit()}
            className="w-[150px] h-[50px] border-2 rounded-3xl font-montserrat text-[20px]"
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
              href="/pages/sign-in/registration"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
