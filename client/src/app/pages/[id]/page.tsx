"use client";
import { fetchCoins } from "../../../function/index";
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import type { Props } from "@/types";
const page = ({ params: { id } }: Props) => {
  const { coins, isError, isLoading } = fetchCoins();
  return (
    <div className="max-container h-screen  flex justify-center items-center">
      {coins.map((coin) => (
        <div key={coin.id}>
          {coin.id === id ? (
            <div>
              {isLoading ? (
                <div className="w-[400px] rounded-3xl h-[400px] bg-black"></div>
              ) : (
                <div className="w-[700px] p-[25px] gap-4 max-xl:w-[450px] flex justify-between items-center border-2 max-xl:h-[500px] h-[350px] rounded-[30px]">
                  <div>
                    <div className="gap-4  flex flex-col">
                      <div className="flex gap-4 ">
                        <div className="h-[75px]  border-2 rounded-2xl w-[100px] flex justify-center items-center">
                          <Image
                            src={coin.icon}
                            alt={coin.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </div>
                        <div className="border-2 rounded-2xl max-xl:text-[20px] w-[300px] max-xl:w-[20%] h-[75px] text-[35px] font-montserrat flex justify-center items-center">
                          {coin.name}
                        </div>
                        <div
                          className={`max-xl:w-[200px] w-[200px] text-[20px]  h-[75px] flex justify-center items-center rounded-2xl border-2 ${
                            coin.priceChange1d > 0
                              ? "text-green-300"
                              : "text-red-400"
                          }`}
                        >
                          {coin.price.toFixed(2)} $
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="h-[75px] rounded-2xl border-2 w-[260px] max-xl:w-[100px] flex justify-center items-center text-[35px]">
                          #{coin.rank}
                        </div>
                        <div
                          className={`h-[75px]  rounded-2xl border-2 max-xl:w-[280px] w-[350px] flex justify-center items-center max-xl:text-[15px] text-[20px]`}
                        >
                          Market cap :
                          <div
                            className={`ml-[10px] ${
                              coin.priceChange1d > 0
                                ? "text-green-300"
                                : "text-red-400"
                            }`}
                          >
                            {" "}
                            {Math.round(coin.marketCap).toLocaleString(
                              "en-US"
                            )}{" "}
                            $
                          </div>
                        </div>
                      </div>
                      <div className="flex max-xl:flex-wrap gap-4">
                        <div className="border-2 gap-2 max-xl:w-[180px] w-[200px] h-[75px] rounded-2xl flex justify-center items-center">
                          hour change :
                          <div
                            className={`${
                              coin.priceChange1h > 0
                                ? "text-green-300"
                                : "text-red-400"
                            }`}
                          >
                            {coin.priceChange1h}%
                          </div>
                        </div>
                        <div className="border-2 w-[200px] gap-2 h-[75px] rounded-2xl flex justify-center items-center">
                          day change :
                          <div
                            className={`${
                              coin.priceChange1d > 0
                                ? "text-green-300"
                                : "text-red-400"
                            }`}
                          >
                            {coin.priceChange1d}%
                          </div>
                        </div>
                        <div className="border-2 gap-2 w-[200px] h-[75px] rounded-2xl flex justify-center items-center">
                          week change :
                          <div
                            className={` ${
                              coin.priceChange1w > 0
                                ? "text-green-300"
                                : "text-red-400"
                            }`}
                          >
                            {coin.priceChange1w}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default page;
