import React from "react";
import Image from "next/image";
import { gold, medium, tryperiod } from "@/assets/img";
const page = () => {
  return (
    <div className="h-screen max-container justify-center flex items-start mt-[200px]">
      <table>
        <thead>
          <tr>
            <th className="border-b-[6px] border-r-[6px] w-[300px] h-[100px]"></th>
            <th className="text-[25px]   w-[300px] h-[100px]">
              <div className="flex items-center justify-center gap-4">
                <Image
                  className="mb-4"
                  src={tryperiod}
                  alt="medium"
                  width={60}
                />
                Trial period
              </div>
            </th>
            <th className="text-[25px] border-l-[6px] border-r-[6px] w-[300px] h-[100px]">
              <div className="flex items-center justify-center gap-4">
                <Image className="mb-4" src={medium} alt="medium" width={60} />
                Medium
              </div>
            </th>
            <th className="text-[25px] border-b-[6px] w-[300px] h-[100px]">
              <div className="flex items-center justify-center gap-4">
                <Image src={gold} alt="gold" width={60} />
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
            <td className="border-[6px] text-[30px] pl-[10%]">YES</td>
            <td className="border-[6px] text-[30px] pl-[10%]">YES</td>
            <td className="border-t-[6px] border-l-[6px] text-[30px] pl-[10%]">
              YES
            </td>
          </tr>
          <tr>
            <td className="border-b-[6px] border-r-[6px] w-[300px] h-[100px]">
              Рядок, Колонка 2
            </td>
            <td className="border-[6px] w-[300px] h-[100px] text-[30px] pl-[10%]">
              YES
            </td>
            <td className="border-[6px] w-[300px] h-[100px] text-[30px] pl-[10%]">
              YES
            </td>
            <td className="border-l-[6px] border-t-[6px] text-[30px] pl-[10%]">
              YES
            </td>
          </tr>
          <tr>
            <td className="border-b-[6px]  border-r-[6px] w-[300px] h-[100px]">
              Рядок, Колонка 3
            </td>
            <td className="border-[6px] text-[30px] pl-[10%]">NO</td>
            <td className="border-[6px] text-[30px] pl-[10%]">YES</td>
            <td className="border-l-[6px] border-t-[6px] text-[30px] pl-[10%]">
              YES
            </td>
          </tr>
          <tr>
            <td className=" border-r-[6px] w-[300px] h-[100px]">
              Рядок, Колонка 4
            </td>
            <td className="border-r-[6px] text-[30px] pl-[10%]">NO</td>
            <td className="border-r-[6px] text-[30px] pl-[10%]">NO</td>
            <td className="border-l-[6px] border-t-[6px] text-[30px] pl-[10%]">
              YES
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
