import React from "react";
import Image from "next/image";
import Link from "next/link";
import { binance, coinbase, tradingview, whitebit } from "@/assets/img";
const MarketWindow = () => {
  return (
    <div>
      <div className=" p-[50px]  gap-5 flex flex-col justify-center text-blue-300 font-bold">
        <li className="flex gap-5 items-center">
          <Image width={60} src={binance} alt="binance" />
          <Link
            target="_blank"
            href="https://accounts.binance.com/uk-UA/register?ref=747973865&gclid=Cj0KCQiAkKqsBhC3ARIsAEEjuJiCLfabY6cA5U0DIP_D0mnn7hsGNjz2oJJf1YI4oN7TEnJ1anTnQuoaAoyUEALw_wcB"
          >
            Binance
          </Link>
        </li>
        <li className="flex gap-5 items-center">
          <Image width={60} src={coinbase} alt="binance" />
          <Link target="_blank" href="https://www.coinbase.com/ ">
            Coinbase
          </Link>
        </li>
        <li className="flex gap-5 items-center">
          <Image width={60} src={whitebit} alt="binance" />
          <Link
            target="_blank"
            href="https://whitebit.com/auth/register?referral=01482431-a2f2-4fc7-b7bb-e46585ef7c64"
          >
            WhiteBit
          </Link>
        </li>
        <li className="flex gap-5 items-center">
          <Image width={60} src={tradingview} alt="binance" />
          <Link
            target="_blank"
            href="https://www.tradingview.com/#market-summary"
          >
            TradingView
          </Link>
        </li>
      </div>
    </div>
  );
};

export default MarketWindow;
