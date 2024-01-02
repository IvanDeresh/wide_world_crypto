"use client";
import { useFetchData } from "../../../function/index";
import React from "react";

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
            <div className="w-[1200px] p-[35px] gap-4 flex flex-col items-end border-2 h-[600px] rounded-[30px]">
              {isLoading && <div>Loading...</div>}
              <div className="flex gap-4 ">
                <div className="border-2 rounded-2xl w-[415px] h-[75px] text-[35px] font-montserrat flex justify-center items-center">
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
                <div className="border-2 gap-2 w-[200px] h-[75px] rounded-2xl flex justify-center items-center">
                  hour change :
                  <div
                    className={`${
                      coin.priceChange1h > 0 ? "text-green-300" : "text-red-400"
                    }`}
                  >
                    {coin.priceChange1h}%
                  </div>
                </div>
                <div className="border-2 w-[200px] gap-2 h-[75px] rounded-2xl flex justify-center items-center">
                  day change :
                  <div
                    className={`${
                      coin.priceChange1d > 0 ? "text-green-300" : "text-red-400"
                    }`}
                  >
                    {coin.priceChange1d}%
                  </div>
                </div>
                <div className="border-2 gap-2 w-[200px] h-[75px] rounded-2xl flex justify-center items-center">
                  week change :
                  <div
                    className={` ${
                      coin.priceChange1w > 0 ? "text-green-300" : "text-red-400"
                    }`}
                  >
                    {coin.priceChange1w}%
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
