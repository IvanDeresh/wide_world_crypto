"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { factory, ethereum, bitcoin } from "@/assets/img";
import Button from "./Button";
import { fetchCoins } from "@/function";
const Hero = () => {
  const { coins, isError, isLoading } = fetchCoins();
  const [visibleCoins, setVisibleCoins] = useState<string[]>([]);

  useEffect(() => {
    const updateVisibleCoins = () => {
      const screenWidth = window.innerWidth;
      let coinsToShow: string[] = [];

      switch (true) {
        case screenWidth >= 1450:
          coinsToShow.push("XRP");
        case screenWidth >= 1200:
          coinsToShow.push("Solana");
        case screenWidth >= 1000:
          coinsToShow.push("BNB");
        case screenWidth >= 800:
          coinsToShow.push("Tether");
        case screenWidth >= 600:
          coinsToShow.push("Ethereum");
        case screenWidth >= 0:
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
    <section className="max-container w-full flex flex-col">
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
          <Link href="/pages/subscribe">
            <Button lebel="Let's see" />
          </Link>
        </div>
        <Image
          src={factory}
          alt="icon"
          className="rounded-2xl max-md:w-[80vw]"
        />
      </div>
      <div className="mt-[200px] border-b-[4px] border-t-[4px] p-[20px]">
        <div className="flex gap-10">
          {isLoading ? (
            <div className="w-[200px] h-[70px] justify-center flex items-center rounded-2xl ml-[50%] bg-[#21296e]">
              Loading...
            </div>
          ) : (
            <div className="flex gap-10">
              {coins.map((coin) => (
                <ul key={coin.id} className="">
                  {visibleCoins.includes(coin.name) && (
                    <Link
                      href={`/pages/${coin.id}`}
                      className="w-[200px] justify-around p-5 bg-[#21296e] items-start  flex flex-col rounded-3xl h-[150px] shadow-2xl shadow-white"
                    >
                      <div className="flex gap-5 items-center">
                        <Image
                          src={coin.icon}
                          alt="coin"
                          width={50}
                          height={50}
                        />
                        <li>{coin.name}</li>
                      </div>

                      <div>
                        <li className="text-blue-400 font-bold text-[15px]">
                          {coin.price.toFixed(2)} $
                        </li>
                        <li
                          className={`${
                            coin.priceChange1d > 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {coin.priceChange1d} %
                        </li>
                      </div>
                    </Link>
                  )}
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
