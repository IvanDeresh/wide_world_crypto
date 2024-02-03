"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { isometric, cryptoimg, bgprimary } from "@/assets/img";
import NewsWindow from "./NewsWindow";
import MarketWindow from "./MarketWindow";
import BrokersWindow from "./BrokersWindow";
import SubscribeWindow from "./SubscribeWindow";
import { fetchCoins } from "@/function";
import { signIn, signOut, useSession } from "next-auth/react";

const TheHeader = () => {
  const [isActive, setIsactive] = useState(false);
  const [isMarketVisible, setIsMarketVisible] = useState(false);
  const [isBrokersVisible, setIsBrokersVisible] = useState(false);
  const [isNewsVisible, setIsNewsVisible] = useState(false);
  const [isSubscriveVisible, setIsSubscriveVisible] = useState(false);
  const [isSearchClicked, setIsSearchCliecked] = useState(false);
  const session = useSession();

  const user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;

  const getFilteredItems = (query: string, items: any, isLoading: any) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!query) {
      return items;
    } else {
      return items.filter((item: any) => {
        return (
          (item.id && item.id.includes(query)) ||
          item.name.includes(query) ||
          item.symbol.includes(query)
        );
      });
    }
  };
  const [query, setQuery] = useState("");
  const { coins, isLoading, isError } = fetchCoins();
  const filteredItems = getFilteredItems(query, coins, isLoading);
  useEffect(() => {
    const handleScroll = () => {
      setIsMarketVisible(false);
      setIsBrokersVisible(false);
      setIsSubscriveVisible(false);
      setIsSubscriveVisible(false);
      setIsNewsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="font-montserrat relative max-container">
      <div className="flex justify-around items-center mt-[40px]">
        <Link href="/" className="text-[20px] font-montserrat">
          WideWorld
        </Link>

        <div className="w-[30%] max-xl:w-[40%]">
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
            className="w-[100%] h-[35px]  outline-none text-white pl-8 bg-[#141941] rounded-full placeholder:text-white"
          />
          {isSearchClicked && (
            <div
              onMouseLeave={() => setIsSearchCliecked(false)}
              className="top-[80px] z-50 items-center pb-10 overflow-y-auto h-[250px] gap-4 max-xl:w-[50%] max-sm:w-[300px] max-2xl:left-[28%] bg-[#21296e] absolute w-[50%] rounded-2xl  flex flex-col pt-[50px] px-10 left-[210px]"
            >
              {Array.isArray(filteredItems) ? (
                filteredItems.map((coin: any) => (
                  <Link
                    href={`/pages/${coin.id}`}
                    className="border-2  items-center justify-around flex w-[100%] rounded-2xl min-h-[50px]"
                    key={coin.id}
                  >
                    <div className="flex justify-between w-[20%] max-2xl:w-[40%]">
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
        <ul className="flex max-xl:hidden items-center justify-around w-[40%] font-montserrat text-[15px]">
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
              className="absolute z-50 bg-white flex items-center justify-between w-[400px] h-[300px] top-[80px] left-[170px] rounded-[20px]"
            >
              <MarketWindow />
              <Image
                className="rounded-tr-[20px] h-[300px] rounded-br-[20px]"
                src={cryptoimg}
                alt="iso"
                height={320}
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
              className="w-[600px] z-50 text-blue-400 font-montserrat  flex rounded-[20px] absolute top-[80px] left-[280px] bg-white h-[300px]"
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
            href="/pages/news"
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
              className="absolute z-50 top-[80px] left-[400px] bg-white w-[600px] h-[300px] border-2 rounded-[20px]"
            >
              <div className="absolute flex p-[30px] items-center">
                <NewsWindow />
              </div>
            </div>
          )}
          {user && <Link href="/pages/profile">Profile</Link>}
          {session?.data && <Link href="/pages/profile">Profile</Link>}
          <Link
            href="/pages/subscribe"
            onMouseEnter={() => {
              setIsMarketVisible(false);
              setIsNewsVisible(false);
              setIsBrokersVisible(false);
              setIsSearchCliecked(false);
              setIsSubscriveVisible(true);
            }}
            className="bg-gradient-to-r flex justify-center items-center w-[130px] h-[40px] rounded-full bg-blue-600 from-cyan-500 to-blue-500"
          >
            Upgrade trial
          </Link>
          {isSubscriveVisible && (
            <div
              onMouseLeave={() => setIsSubscriveVisible(false)}
              className="absolute z-50 flex flex-col items-center justify-center bg-white w-[300px] h-[400px] rounded-[20px] top-[100px] right-[160px]"
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
        {session?.data ? null : (
          <div>
            {user ? null : (
              <Link
                href="/pages/sign-in"
                className="flex w-[130px] h-[40px] border-2 justify-center items-center text-[20px] rounded-3xl max-xl:hidden"
              >
                Sign in
              </Link>
            )}
          </div>
        )}
        <div
          className="hidden max-xl:flex "
          onClick={() => {
            setIsSearchCliecked(false);
            setIsactive(!isActive);
          }}
        >
          {isActive ? (
            <CloseIcon className="text-[35px] cursor-pointer" />
          ) : (
            <MenuIcon className="text-[35px] cursor-pointer" />
          )}
        </div>
        {isActive && (
          <nav className="hidden z-50 animate-fromRight border-2 w-[250px] max-sm:w-[170px] h-[350px] rounded-2xl bg-[#abbbd6] justify-around items-center absolute max-xl:flex max-xl:flex-col top-[100px] right-[10px] font-montserrat text-[15px]">
            <ul className="justify-center gap-5 items-center max-xl:flex h-[60%] max-xl:flex-col">
              <Link
                className=""
                onMouseEnter={() => {
                  setIsMarketVisible(true);
                  setIsSearchCliecked(false);
                  setIsBrokersVisible(false);
                  setIsNewsVisible(false);
                  setIsSubscriveVisible(false);
                }}
                href="/"
              >
                Markets
              </Link>
              {isMarketVisible && (
                <div
                  onMouseLeave={() => {
                    setIsMarketVisible(false);
                  }}
                  className="absolute border-2 flex justify-center items-center rounded-3xl w-[300px] h-[350px] top-[0px] max-sm:right-[180px] right-[300px] bg-[#ffffff]"
                >
                  <MarketWindow />
                </div>
              )}
              <Link
                href="/"
                onMouseEnter={() => {
                  setIsMarketVisible(false);
                  setIsBrokersVisible(true);
                  setIsSearchCliecked(false);
                  setIsNewsVisible(false);
                  setIsSubscriveVisible(false);
                }}
              >
                Brokers
              </Link>

              {isBrokersVisible && (
                <div
                  onMouseLeave={() => {
                    setIsBrokersVisible(false);
                  }}
                  className="absolute border-2 flex justify-center items-center rounded-3xl w-[300px] h-[350px] top-[0px] max-sm:right-[180px] right-[300px] bg-[#abbbd6]"
                >
                  <BrokersWindow />
                </div>
              )}
              <Link
                href="/pages/news"
                onMouseEnter={() => {
                  setIsMarketVisible(false);
                  setIsSearchCliecked(false);
                  setIsBrokersVisible(false);
                  setIsNewsVisible(false);
                  setIsSubscriveVisible(false);
                }}
              >
                News
              </Link>
              {user ? (
                <Link href="/pages/profile">Profile</Link>
              ) : session.data?.user ? (
                <Link href={`/pages/profile/${session.data.user.name}`}>
                  Profile
                </Link>
              ) : null}
            </ul>
            <Link
              href="/pages/subscribe"
              className="bg-gradient-to-r flex justify-center items-center w-[130px] h-[40px] rounded-full bg-blue-600 from-cyan-500 to-blue-500"
            >
              Upgrade trial
            </Link>

            {session.data?.user || user ? null : (
              <Link
                onClick={() => signIn()}
                href="/pages/sign-in"
                className="hidden max-xl:flex  w-[130px] h-[40px] border-2 justify-center items-center text-[20px] rounded-3xl "
              >
                Sign in
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default TheHeader;
