"use client";
import { fetchNews } from "@/function";
import React from "react";
import Image from "next/image";
import type { Props } from "@/types";
const page = ({ params: { id } }: Props) => {
  const padNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(
      date.getDate()
    )}`;
  };

  const formatTime = (date: Date) => {
    return `${padNumber(date.getUTCHours())}:${padNumber(
      date.getUTCMinutes()
    )}`;
  };
  const news = fetchNews();
  return (
    <div className="mt-[100px] min-h-screen text-[50px] h-full max-container flex justify-center items-center">
      {news.map((news) => (
        <div>
          {news.id === Number(id) && (
            <div className="max-[1540px]:flex-col max-[1540px]:flex flex justify-between mb-[200px] gap-10 w-[100%]">
              <div className=" w-[700px] max-md:w-[400px] max-md:h-auto max-md:gap-[20px] p-[20px] flex flex-col justify-around items-center h-[700px] border-2 rounded-3xl">
                <div className="border-b-2 shadow-2xl max-md:text-[18px] border-t-2 text-[22px] w-[80%] h-[75px] rounded-2xl p-[5%] flex justify-center items-center">
                  {news.title}
                </div>
                <div className="border-t-2 shadow-xl border-b-2 max-md:text-[15px] text-[20px] w-[90%] h-[200px] rounded-2xl p-[5%] flex justify-center items-center">
                  {news.description}
                </div>
                <div className="flex justify-between w-[95%]">
                  {news.tags.map((tag, index) => (
                    <div
                      className="border-t-2 shadow-2xl border-b-2 text-[17px] w-[160px] max-md:w-[100px] max-xd:h-[50px] max-md:text-[14px] h-[75px] rounded-2xl p-[5%] flex justify-center items-center"
                      key={index}
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className="flex text-[20px] max-md:text-[15px] w-[100%] justify-around">
                  <div className="text-blue-200">
                    {formatDate(new Date(news.date))} |{" "}
                    {formatTime(new Date(news.date))}
                  </div>
                  <div className="text-blue-200">{news.author}</div>
                </div>
              </div>
              <Image
                src={news.image}
                alt={news.title}
                width={600}
                height={600}
                className="rounded-3xl w-[700px] max-md:w-[400px] max-md:h-[400px] h-[700px]"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default page;
