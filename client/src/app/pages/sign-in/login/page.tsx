"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const Page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [click, setClick] = useState(false);
  const [result, setResult] = useState<AxiosResponse<any> | null>(null);

  useEffect(() => {
    const userLogin = async () => {
      try {
        const result = await axios.post("/auth/login", {
          username: name,
          password: password,
        });
        setResult(result);
      } catch (e) {
        console.log("login error", e);
      }
    };
    userLogin();
  }, [click]);

  return (
    <div className="h-screen justify-center flex items-center">
      <div className="flex justify-center items-center mb-[300px] border-2 w-[500px] h-[600px] rounded-3xl">
        <div className="flex flex-col items-center justify-around h-[70%]">
          <div className="flex flex-col items-center">
            <div className="text-[30px] font-montserrat">Login</div>
            <div className="w-[150px] h-[10px] bg-white rounded-full"></div>
          </div>
          <input
            className="h-[50px] p-[10px] w-[400px] text-slate-400 rounded-full focus:outline-none"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="h-[50px] p-[10px] w-[400px] text-slate-400 rounded-full focus:outline-none"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => setClick(!click)}
            className="w-[150px] h-[50px] border-2 rounded-3xl font-montserrat text-[20px]"
          >
            Confirm
          </button>
          {result && <div>{result.data}</div>}
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
