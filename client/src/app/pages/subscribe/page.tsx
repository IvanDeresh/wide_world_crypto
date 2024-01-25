import React from "react";
import Image from "next/image";
import { gold, medium, tryperiod } from "@/assets/img";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen mb-[200px] p-5 max-container justify-start flex-col flex items-center gap-[100px] mt-[200px]">
      <div className="text-[35px] w-full justify-center max-sm:border-t-2 max-sm:border-b-2 rounded-2xl flex font-montserrat ">
        Our special subscriptions
      </div>
      <table>
        <thead>
          <tr>
            <th className="border-b-[6px] border-r-[6px] w-[300px] h-[100px]"></th>
            <th className="max-xl:text-[14px] max-md:text-[15px] text-[20px] w-[300px] h-[100px]">
              <div className="flex items-center justify-a gap-2  p-[15px]">
                <Image src={tryperiod} alt="medium" width={30} />
                Trial period
              </div>
            </th>
            <th className="border-l-[6px] border-r-[6px] max-md:text-[15px] text-[20px] w-[300px] h-[100px]">
              <div className="flex items-center justify-center p-[15px] gap-2">
                <Image className="mb-4" src={medium} alt="medium" width={30} />
                Medium
              </div>
            </th>
            <th className="border-b-[6px] w-[300px] p-[15px] h-[100px]">
              <div className="flex items-center justify-around gap-2">
                <Image src={gold} alt="gold" width={30} />
                Premium
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b-[6px] border-r-[6px] w-[300px] h-[100px]">
              Рядок, Колонка 1
            </td>
            <td className="border-[6px] text-[25px] pl-[10%]">YES</td>
            <td className="border-[6px] text-[25px] pl-[10%]">YES</td>
            <td className="border-t-[6px] border-l-[6px] text-[25px] pl-[10%]">
              YES
            </td>
          </tr>
          <tr>
            <td className="border-b-[6px] border-r-[6px] w-[300px] h-[100px]">
              Рядок, Колонка 2
            </td>
            <td className="border-[6px] w-[300px] h-[100px] text-[25px] pl-[10%]">
              YES
            </td>
            <td className="border-[6px] w-[300px] h-[100px] text-[25px] pl-[10%]">
              YES
            </td>
            <td className="border-l-[6px] border-t-[6px] text-[25px] pl-[10%]">
              YES
            </td>
          </tr>
          <tr>
            <td className="border-b-[6px]  border-r-[6px] w-[300px] h-[100px]">
              Рядок, Колонка 3
            </td>
            <td className="border-[6px] text-[25px] pl-[10%]">NO</td>
            <td className="border-[6px] text-[25px] pl-[10%]">YES</td>
            <td className="border-l-[6px] border-t-[6px] text-[25px] pl-[10%]">
              YES
            </td>
          </tr>
          <tr className="text-green-300">
            <td className=" border-r-[6px] text-white w-[300px] h-[100px]">
              Рядок, Колонка 4
            </td>
            <td className="border-r-[6px] text-[25px] pl-[10%]">1$</td>
            <td className="border-r-[6px] text-[25px] pl-[10%]">20$</td>
            <td className="border-l-[6px] border-t-[6px] text-[25px] pl-[10%]">
              30$
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-around w-full gap-[20px] text-[25px] max-sm:text-[20px]">
        <Link
          href="/pages/payment/trial-period"
          className="w-[200px] flex justify-center items-center h-[75px]  text-[#333232] rounded-xl border-2 hover:bg-[#04AA6D] duration-300  border-[#04AA6D]   hover:text-white"
        >
          Trial Period
        </Link>
        <Link
          href="/pages/payment/medium"
          className="w-[200px] h-[75px] flex justify-center items-center text-[#333232] rounded-xl border-2 hover:bg-[#008CBA] duration-300  border-[#008CBA]   hover:text-white"
        >
          Medium
        </Link>
        <Link
          href="/pages/payment/premium"
          className="w-[200px] h-[75px] flex justify-center items-center text-[#333232] rounded-xl border-2 hover:bg-[rgb(226,204,7)] duration-300  border-[rgb(226,204,7)]   hover:text-white"
        >
          Premium
        </Link>
      </div>
    </div>
  );
};

export default page;
