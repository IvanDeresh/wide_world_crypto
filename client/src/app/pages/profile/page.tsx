"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";

type User = {
  username: string;
  email: string;
  roles: string;
};

const ProfilePage = () => {
  const router = useRouter();
  const session = useSession();
  const storedUserData: string | null = localStorage.getItem("user");
  const [user, setUser] = useState<User | null>(null);

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

  if (session.data?.user) {
    router.replace(`/pages/profile/${session.data?.user?.name}`);
  }
  return (
    <div className="h-screen justify-center flex items-center">
      {user && !session.data?.user ? (
        <div className="flex justify-center items-center border-2 w-[500px] h-[500px] max-sm:w-[400px] max-sm:h-[400px] max rounded-3xl">
          <div className="flex flex-col items-center justify-around h-[70%]">
            <div className="flex flex-col items-center">
              <div className="text-[30px] font-montserrat">Profile</div>
              <div className="w-[150px] h-[10px] bg-white rounded-full"></div>
            </div>
            {user ? (
              <div className="h-[50%] flex flex-col justify-around items-center">
                <div className="flex flex-col justify-around">
                  <div>name: {user.username}</div>
                  <div>email: {user.email}</div>
                  <div>role: {user.roles}</div>
                </div>
                <button
                  className="w-[150px] h-[35px] rounded-3xl border-2"
                  onClick={() => {
                    localStorage.removeItem("user");
                    router.replace("/");
                  }}
                >
                  Log out
                </button>
              </div>
            ) : (
              <div>
                <p>Loading...</p>
              </div>
            )}
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

export default ProfilePage;
