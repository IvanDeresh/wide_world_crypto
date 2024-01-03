"use client";
import { useFetchData } from "../../../function/index";
import React from "react";
import Image from "next/image";
type Props = {
  params: {
    id: string;
  };
};
const page = ({ params: { id } }: Props) => {
  const { coins, isError, isLoading } = useFetchData();
  return (
    <div className="max-container h-screen  flex justify-center items-center">
      {coins.map((coin) => (
        <div>
          {coin.id === id ? (
            <div className="w-[1200px] p-[35px] gap-4 flex justify-between items-start border-2 h-[600px] rounded-[30px]">
              {isLoading && <div>Loading...</div>}
              <div>
                <Image
                  src={coin.icon}
                  alt={coin.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="gap-4 flex flex-col">
                <div className="flex gap-4 ">
                  <div className="h-[75px] border-2 rounded-2xl w-[100px] flex justify-center items-center">
                    <Image
                      src={coin.icon}
                      alt={coin.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="border-2 rounded-2xl w-[300px] h-[75px] text-[35px] font-montserrat flex justify-center items-center">
                    {coin.name}
                  </div>
                  <div
                    className={`w-[200px] text-[20px]  h-[75px] flex justify-center items-center rounded-2xl border-2 ${
                      coin.priceChange1d > 0 ? "text-green-300" : "text-red-400"
                    }`}
                  >
                    {coin.price.toFixed(2)} $
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-[75px] rounded-2xl border-2 w-[260px] flex justify-center items-center text-[35px]">
                    #{coin.rank}
                  </div>
                  <div
                    className={`h-[75px]  rounded-2xl border-2 w-[356px] flex justify-center items-center text-[20px]`}
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
                      {Math.round(coin.marketCap).toLocaleString("en-US")} $
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="border-2 gap-2 w-[200px] h-[75px] rounded-2xl flex justify-center items-center">
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
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default page;
