"use client";
import React, { useEffect, useState } from "react";
import type { Props } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
type User = {
  username: string;
  email: string;
  roles: string;
};

const page = ({ params: { id } }: Props) => {
  const router = useRouter();
  const storedUserData: string | null = localStorage.getItem("user");
  const [user, setUser] = useState<User | null>(null);
  const session = useSession();
  useEffect(() => {
    if (storedUserData) {
      try {
        const userData: User = JSON.parse(storedUserData);
        setUser(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
    }
  }, [router, storedUserData]);
  const userData = user ? user.email : session.data?.user?.email;
  const updateRole = async () => {
    try {
      const response = await axios.put("http://localhost:3003/auth/update", {
        email: userData,
        role: id,
      });
      const { message } = response.data;
      if (message) {
        window.alert(message);
        localStorage.removeItem("user");
        router.replace(`/pages/profile`);
      } else {
        window.alert(message);
      }
    } catch (error: any) {
      window.alert("Error update role" + " . " + error.response.data.message);
    }
  };

  const [money, setMoney] = useState("");
  return (
    <div className="h-screen  flex max-container justify-center items-center">
      <div className="border-2 gap-[20px] w-[400px] flex flex-col justify-center items-center h-[500px] rounded-3xl">
        <div className="text-[25px]">Give me money</div>
        <input
          placeholder="MONEY "
          value={money}
          onChange={(e: any) => setMoney(e.target.value)}
          className="rounded-full text-slate-300 outline-none p-[10px] w-[300px] h-[50px]"
        />
        <button
          onClick={() => updateRole()}
          className="border-2 w-[150px] h-[40px] rounded-full"
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default page;
