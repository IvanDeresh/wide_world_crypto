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
import { useFetchData } from "@/function";

const TheHeader = () => {
  const [isActive, setIsactive] = useState(false);
  const [isMarketVisible, setIsMarketVisible] = useState(false);
  const [isBrokersVisible, setIsBrokersVisible] = useState(false);
  const [isNewsVisible, setIsNewsVisible] = useState(false);
  const [isSubscriveVisible, setIsSubscriveVisible] = useState(false);
  const [isSearchClicked, setIsSearchCliecked] = useState(false);

  const getFilteredItems = (query: string, items: any, isLoading: any) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!query) {
      return items;
    } else {
      return items.filter((item: any) => item.id.includes(query));
    }
  };
  const [query, setQuery] = useState("");
  const { coins, isLoading, isError } = useFetchData();
  const filteredItems = getFilteredItems(query, coins, isLoading);
  useEffect(() => {
    const handleScroll = () => {
      setIsMarketVisible(false);
      setIsBrokersVisible(false);
      setIsSearchCliecked(false);
      setIsSubscriveVisible(false);
      setIsSubscriveVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="font-montserrat relative max-container">
      <div className="flex justify-around items-center mt-[40px]">
        <Link href="/" className="text-[30px] font-montserrat">
          WideWorld
        </Link>

        <div className="w-[20%] max-2xl:w-[40%]">
          <input
            onChange={(e: any) => {
              setQuery(e.target.value);
            }}
            onClick={() => {
              setIsMarketVisible(false);
              setIsSearchCliecked(true);
              setIsBrokersVisible(false);
              setIsNewsVisible(false);
              setIsSubscriveVisible(false);
              setIsactive(false);
            }}
            placeholder="Search"
            className="w-[100%] h-[50px]  outline-none font-bold text-white pl-8 bg-[#141941] rounded-full placeholder:text-white"
          />
          {isSearchClicked && (
            <div
              onMouseLeave={() => setIsSearchCliecked(false)}
              className="top-[80px] items-center pb-10 overflow-y-auto h-[400px] gap-4 max-2xl:w-[50%] max-2xl:left-[28%] bg-[#21296e] absolute w-[70%] rounded-2xl  flex flex-col pt-[50px] px-10 left-[210px]"
            >
              {Array.isArray(filteredItems) ? (
                filteredItems.map((coin: any) => (
                  <Link
                    href={`/pages/${coin.id}`}
                    className="border-2 items-center justify-around flex w-[80%] rounded-2xl min-h-[50px]"
                    key={coin.id}
                  >
                    <div className="flex justify-around w-[10%] max-2xl:w-[40%]">
                      <Image
                        src={coin.icon}
                        alt={coin.id}
                        width={20}
                        height={20}
                      />
                      <div>{coin.symbol}</div>
                    </div>
                    <div className="max-xl:hidden flex">{coin.name} / USD</div>
                    <div
                      className={`${
                        coin.priceChange1h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {coin.priceChange1h} %
                    </div>
                  </Link>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
          )}
        </div>
        <ul className="flex max-2xl:hidden items-center justify-around w-[40%] font-montserrat text-[20px]">
          <button
            onMouseEnter={() => {
              setIsMarketVisible(true);
              setIsSearchCliecked(false);
              setIsBrokersVisible(false);
              setIsNewsVisible(false);
              setIsSubscriveVisible(false);
            }}
          >
            Markets
          </button>
          {isMarketVisible && (
            <div
              onMouseLeave={() => setIsMarketVisible(false)}
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
              setIsSearchCliecked(false);
              setIsNewsVisible(false);
              setIsSubscriveVisible(false);
            }}
          >
            Brokers
          </button>
          {isBrokersVisible && (
            <div
              onMouseLeave={() => setIsBrokersVisible(false)}
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
              setIsSearchCliecked(false);
              setIsBrokersVisible(false);
              setIsSubscriveVisible(false);
            }}
          >
            News
          </Link>
          {isNewsVisible && (
            <div
              onMouseLeave={() => {
                setIsNewsVisible(false);
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
          <Link
            href="/pages/subscribe"
            onMouseEnter={() => {
              setIsMarketVisible(false);
              setIsNewsVisible(false);
              setIsBrokersVisible(false);
              setIsSearchCliecked(false);
              setIsSubscriveVisible(true);
            }}
            className="bg-gradient-to-r flex justify-center items-center w-[150px] h-[50px] rounded-full bg-blue-600 from-cyan-500 to-blue-500"
          >
            Upgrade trial
          </Link>
          {isSubscriveVisible && (
            <div
              onMouseLeave={() => setIsSubscriveVisible(false)}
              className="absolute flex flex-col items-center justify-center bg-white w-[400px] h-[500px] rounded-[20px] top-[100px] right-[160px]"
            >
              <div className="text-black text font-bold text-[25px]">
                Subscriptions
              </div>
              <div className="w-full">
                <SubscribeWindow />
              </div>
            </div>
          )}
        </ul>
        <Link
          href="/pages/sign-in"
          className="flex w-[150px] h-[50px] border-2 justify-center items-center text-[20px] rounded-3xl max-2xl:hidden"
        >
          Sign in
        </Link>
        <div
          className="hidden max-2xl:flex text-[40px]"
          onClick={() => {
            setIsSearchCliecked(false);
            setIsactive(!isActive);
          }}
        >
          {isActive ? (
            <CloseIcon className="text-[50px] cursor-pointer" />
          ) : (
            <MenuIcon className="text-[50px] cursor-pointer" />
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
