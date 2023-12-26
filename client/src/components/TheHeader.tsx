"use client";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@/components/Button";
import {
  binance,
  coinbase,
  isometric,
  tradingview,
  whitebit,
  trading212,
  vanguard,
  blackrock,
  cryptoimg,
  interactive,
} from "@/assets/img";
import NewsToggle from "./NewsToggle";
const TheHeader = () => {
  const [isActive, setIsactive] = useState(false);
  const [isMarketVisible, setIsMarketVisible] = useState(false);
  const [isBrokersVisible, setIsBrokersVisible] = useState(false);
  const [isNewsVisible, setIsNewsVisible] = useState(false);

  const toggleMarket = () => {
    setIsMarketVisible(!isMarketVisible);
  };
  const toggleBroker = () => {
    setIsBrokersVisible(!isBrokersVisible);
  };
  const toggleNews = () => {
    setIsNewsVisible(!isNewsVisible);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsMarketVisible(false);
      setIsBrokersVisible(false);
      setIsNewsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="font-montserrat relative max-container">
      <div className="flex justify-around items-center mt-[40px]">
        <div className="text-[30px] font-montserrat">WideWorld</div>
        <input
          placeholder="Search"
          className="w-[20%] h-[50px] max-2xl:w-[40%] outline-none font-bold text-white pl-8 bg-slate-600 rounded-full placeholder:text-white"
        />
        <ul className="flex max-2xl:hidden items-center justify-around w-[40%] font-montserrat text-[20px]">
          <button
            onMouseEnter={() => {
              toggleMarket();
              setIsBrokersVisible(false);
              setIsNewsVisible(false);
            }}
          >
            Markets
          </button>
          {isMarketVisible && (
            <div
              onMouseLeave={toggleMarket}
              className="absolute bg-white flex items-center justify-between w-[700px] h-[400px] top-[80px] left-[20px] rounded-[20px]"
            >
              <div className=" p-[50px]  gap-5 flex flex-col justify-center text-blue-300 font-bold">
                <li className="flex gap-5 items-center">
                  <Image width={60} src={binance} alt="binance" />
                  <Link href="https://accounts.binance.com/uk-UA/register?ref=747973865&gclid=Cj0KCQiAkKqsBhC3ARIsAEEjuJiCLfabY6cA5U0DIP_D0mnn7hsGNjz2oJJf1YI4oN7TEnJ1anTnQuoaAoyUEALw_wcB">
                    Binance
                  </Link>
                </li>
                <li className="flex gap-5 items-center">
                  <Image width={60} src={coinbase} alt="binance" />
                  <Link href="https://www.coinbase.com/ ">Coinbase</Link>
                </li>
                <li className="flex gap-5 items-center">
                  <Image width={60} src={whitebit} alt="binance" />
                  <Link href="https://whitebit.com/auth/register?referral=01482431-a2f2-4fc7-b7bb-e46585ef7c64">
                    WhiteBit
                  </Link>
                </li>
                <li className="flex gap-5 items-center">
                  <Image width={60} src={tradingview} alt="binance" />
                  <Link href="https://www.tradingview.com/#market-summary">
                    TradingView
                  </Link>
                </li>
              </div>
              <Image
                className="rounded-tr-[20px] rounded-br-[20px]"
                src={cryptoimg}
                alt="iso"
                height={400}
              />
            </div>
          )}
          <button
            onMouseEnter={() => {
              setIsMarketVisible(false);
              toggleBroker();
              setIsNewsVisible(false);
            }}
          >
            Brokers
          </button>
          {isBrokersVisible && (
            <div
              onMouseLeave={toggleBroker}
              className="w-[820px] text-blue-400 font-montserrat  flex rounded-[20px] absolute top-[80px] left-[20px] bg-white h-[400px]"
            >
              <Image
                className="rounded-tl-[20px] rounded-bl-[20px]"
                src={isometric}
                alt="isome"
                height={400}
              />
              <div className="w-full flex">
                <div className="flex p-5 flex-col gap-10 w-[full] justify-center">
                  <Link
                    target="_blank"
                    href="https://www.blackrock.com/corporate/about-us"
                  >
                    <Image
                      src={blackrock}
                      alt="blackrock"
                      className="border-2 w-[220px] h-[110px] rounded-2xl"
                    />
                    <div>BlackRock</div>
                    <p className="flex text-yellow-400">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                    </p>
                  </Link>

                  <Link
                    target="_blank"
                    href="https://www.interactivebrokers.com/en/whyib/overview.php"
                  >
                    <Image
                      src={interactive}
                      alt="interactive"
                      className="rounded-2xl w-[220px] h-[110px] border-2"
                    />
                    <div>IBKR</div>
                    <p className="flex text-yellow-400">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarBorderIcon />
                    </p>
                  </Link>
                </div>
                <div className="flex flex-col gap-10 w-[full] justify-center">
                  <Link
                    target="_blank"
                    href="https://www.trading212.com/pl/about-us"
                  >
                    <Image
                      src={trading212}
                      alt="trading212"
                      className=" border-2 w-[220px] h-[110px] rounded-2xl"
                    />
                    <div>Trading 212</div>
                    <p className="flex text-yellow-400">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarBorderIcon />
                    </p>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://investor.vanguard.com/home"
                  >
                    <Image
                      src={vanguard}
                      alt="vanguard"
                      className="rounded-2xl w-[220px] h-[110px] border-2"
                    />
                    <div>Vanguard</div>
                    <p className="flex  text-yellow-400">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <Link
            href="/"
            onMouseEnter={() => {
              setIsMarketVisible(false);
              toggleNews();
              setIsBrokersVisible(false);
            }}
          >
            News
          </Link>
          {isNewsVisible && (
            <div
              onMouseLeave={toggleNews}
              className="absolute top-[80px] bg-white w-[400px] h-[400px] border-2 rounded-[20px]"
            >
              <NewsToggle />
            </div>
          )}
          <button className="bg-gradient-to-r w-[150px] h-[50px] rounded-full bg-blue-600 from-cyan-500 to-blue-500">
            Upgrade trial
          </button>
        </ul>
        <div className="flex max-2xl:hidden">
          <Button lebel="Sign in" />
        </div>
        <div
          className="hidden max-2xl:flex"
          onClick={() => setIsactive(!isActive)}
        >
          {isActive ? (
            <CloseIcon className="text-[40px]" />
          ) : (
            <MenuIcon className="text-[40px]" />
          )}
        </div>
        {isActive && (
          <nav className="hidden border-2 w-[250px] h-[350px] rounded-2xl bg-[#abbbd6] justify-around items-center absolute max-2xl:flex max-2xl:flex-col top-[100px] right-[10px] font-montserrat text-[20px]">
            <ul className="justify-center gap-5 items-center max-2xl:flex h-[60%] max-2xl:flex-col">
              <Link href="/">Markets</Link>
              <Link href="/">Brokers</Link>
              <Link href="/">News</Link>
            </ul>
            <button className="bg-gradient-to-r w-[150px] h-[50px] rounded-full bg-blue-600 from-cyan-500 to-blue-500">
              Upgrade trial
            </button>
            <div className="hidden max-2xl:flex">
              <Button lebel="Sign in" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default TheHeader;
