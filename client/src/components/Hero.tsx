"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { factory, ethereum, bitcoin } from "@/assets/img";
import Button from "./Button";
import { fetchData } from "@/function";
const Hero = () => {
  const data = fetchData({ url: "https://openapiv1.coinstats.app/coins" });
  const [visibleCoins, setVisibleCoins] = useState<string[]>([]);

  useEffect(() => {
    const updateVisibleCoins = () => {
      const screenWidth = window.innerWidth;
      let coinsToShow: string[] = [];

      switch (true) {
        case screenWidth >= 1800:
          coinsToShow.push("Solana");
        case screenWidth >= 1500:
          coinsToShow.push("BNB");
        case screenWidth >= 1200:
          coinsToShow.push("Tether");
        case screenWidth >= 700:
          coinsToShow.push("Ethereum");
        case screenWidth >= 400:
          coinsToShow.push("Bitcoin");
          break;
        default:
          break;
      }

      setVisibleCoins(coinsToShow);
    };

    updateVisibleCoins();
    window.addEventListener("resize", updateVisibleCoins);

    return () => {
      window.removeEventListener("resize", updateVisibleCoins);
    };
  }, []);
  return (
    <section className="max-container flex flex-col max-xl:mx-[10%]">
      <div className="flex items-center max-xl:flex-col-reverse">
        <div className="flex flex-col justify-center ">
          <div className="max-2xl:w-[400px]">
            <h1 className="text-[25px] font-bold font-montserrat mb-[20px]">
              Explore the Future of Finance with Us
            </h1>
            <p className="flex max-xl:hidden font-montserrat text-[18px] max-xl:w-[50%]">
              Welcome to our cryptocurrency hub, where we unravel the mysteries
              of the crypto world.Join us and take your first step into the
              realm of financial freedom!
            </p>
          </div>
          <div className="flex justify-between w-[100px] mb-[30px]">
            <Image src={bitcoin} alt="btc" width={40} />
            <Image src={ethereum} alt="eth" width={40} />
          </div>
          <Button lebel="Let's see" />
        </div>
        <Image src={factory} alt="icon" className="rounded-2xl" />
      </div>
      <div className="mt-[200px] max-xl:ml-[27%]">
        <div className="w-[85vw] min-[2000px]:w-[115%] bg-white h-[7px] rounded-full mb-[50px]"></div>
        <div className="flex gap-10">
          {data.map((coin) => (
            <ul key={coin.id} className="">
              {visibleCoins.includes(coin.name) && (
                <div className="w-[300px] justify-around bg-[#070d47] items-center flex rounded-3xl h-[200px] shadow-2xl shadow-white">
                  <div>
                    <Image src={coin.icon} alt="coin" width={80} height={80} />
                  </div>
                  <div>
                    <li>{coin.name}</li>
                    <li className="text-blue-400 font-bold text-[20px]">
                      {coin.price.toFixed(2)} $
                    </li>
                  </div>
                </div>
              )}
            </ul>
          ))}
        </div>
        <div className=" w-[85vw] min-[2000px]:w-[115%] bg-white h-[7px] rounded-full mt-[50px]"></div>
      </div>
    </section>
  );
};

export default Hero;
