"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@/components/Button";
import { isometric, cryptoimg, bgprimary } from "@/assets/img";
import NewsWindow from "./NewsWindow";
import MarketWindow from "./MarketWindow";
import BrokersWindow from "./BrokersWindow";
import SubscribeWindow from "./SubscribeWindow";
const TheHeader = () => {
  const [isActive, setIsactive] = useState(false);
  const [isMarketVisible, setIsMarketVisible] = useState(false);
  const [isBrokersVisible, setIsBrokersVisible] = useState(false);
  const [isNewsVisible, setIsNewsVisible] = useState(false);
  const [isTrialVisible, setIsTrialVisible] = useState(false);

  const toggleMarket = () => {
    setIsMarketVisible(!isMarketVisible);
  };
  const toggleTrial = () => {
    setIsTrialVisible(!isTrialVisible);
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
              setIsMarketVisible(true);
              setIsBrokersVisible(false);
              setIsNewsVisible(false);
              setIsTrialVisible(false);
            }}
          >
            Markets
          </button>
          {isMarketVisible && (
            <div
              onMouseLeave={toggleMarket}
              className="absolute bg-white flex items-center justify-between w-[700px] h-[400px] top-[80px] left-[20px] rounded-[20px]"
            >
              <MarketWindow />
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
              setIsBrokersVisible(true);
              setIsNewsVisible(false);
              setIsTrialVisible(false);
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
              <BrokersWindow />
            </div>
          )}
          <Link
            href="/"
            onMouseEnter={() => {
              setIsMarketVisible(false);
              setIsNewsVisible(true);
              setIsBrokersVisible(false);
              setIsTrialVisible(false);
            }}
          >
            News
          </Link>
          {isNewsVisible && (
            <div
              onMouseLeave={() => {
                toggleNews();
              }}
              className="absolute top-[80px] left-[20px] bg-white w-[930px] h-[400px] border-2 rounded-[20px]"
            >
              <div className="absolute bottom-[-120px] flex items-center">
                <NewsWindow />
                <Image
                  src={bgprimary}
                  alt="bg"
                  className="h-[390px] mb-[110px] rounded-2xl"
                />
              </div>
            </div>
          )}
          <button
            onMouseEnter={() => {
              setIsMarketVisible(false);
              setIsNewsVisible(false);
              setIsBrokersVisible(false);
              setIsTrialVisible(true);
            }}
            className="bg-gradient-to-r w-[150px] h-[50px] rounded-full bg-blue-600 from-cyan-500 to-blue-500"
          >
            Upgrade trial
          </button>
          {isTrialVisible && (
            <div className="absolute bg-white w-[400px] h-[500px] rounded-[20px] top-[100px] right-[160px]">
              <SubscribeWindow />
            </div>
          )}
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
