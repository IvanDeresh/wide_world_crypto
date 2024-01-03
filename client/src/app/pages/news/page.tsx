"use client";
import { fetchNews } from "@/function";
import React, { useState } from "react";
import Image from "next/image";
import AddNews from "@/components/AddNews";
const page = () => {
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
  const [clicked, setClicked] = useState(false);
  return (
    <div className="h-full max-container relative my-[200px] flex text-[20px] flex-col justify-center items-center">
      <div className="text-[50px] mb-[100px]  font-montserrat">
        News Wide World
      </div>
      <button
        onClick={() => setClicked(!clicked)}
        className="w-[100px] bg-[#abbbd6] cursor-pointer h-[100px] absolute text-[60px] shadow-2xl border-2 rounded-2xl top-[-20px] right-[15%] flex justify-center items-center max-xl:right-[5%]"
      >
        +
      </button>
      {clicked ? (
        <div className="absolute top-[150px] border-t-2 shadow-2xl border-b-2 rounded-3xl bg-[#abbbd6]">
          <AddNews />
        </div>
      ) : null}
      {news.map((news) => (
        <div key={news.id} className="">
          {news.id % 2 !== 0 ? (
            <div className="max-[1540px]:flex-col max-[1540px]:flex flex justify-between mb-[200px] gap-10 w-[100%]">
              <div className=" w-[700px] p-[20px] flex flex-col justify-around items-center h-[700px] border-2 rounded-3xl">
                <div className="border-b-2 shadow-2xl border-t-2 text-[22px] w-[80%] h-[75px] rounded-2xl p-[5%] flex justify-center items-center">
                  {news.title}
                </div>
                <div className="border-t-2 shadow-xl border-b-2 text-[20px] w-[90%] h-[200px] rounded-2xl p-[5%] flex justify-center items-center">
                  {news.description}
                </div>
                <div className="flex justify-between w-[95%]">
                  {news.tags.map((tag, index) => (
                    <div
                      className="border-t-2 shadow-2xl border-b-2 text-[17px] w-[160px] h-[75px] rounded-2xl p-[5%] flex justify-center items-center"
                      key={index}
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] justify-between">
                  <div className="text-blue-200s">
                    {formatDate(new Date(news.date))} |{" "}
                    {formatTime(new Date(news.date))}
                  </div>
                  <div>{news.author}</div>
                </div>
              </div>
              <Image
                src={news.image}
                alt={news.title}
                width={600}
                height={600}
                className="rounded-3xl w-[700px] h-[700px]"
              />
            </div>
          ) : (
            <div className="flex max-[1540px]:flex-col max-[1540px]:flex justify-between mb-[200px] gap-10 w-[100%]">
              <Image
                src={news.image}
                alt={news.title}
                width={600}
                height={600}
                className="rounded-3xl w-[700px] h-[700px]"
              />
              <div className=" w-[700px] p-[20px] flex flex-col justify-around items-center h-[700px] border-2 rounded-3xl">
                <div className="border-b-2 shadow-2xl border-t-2 text-[22px] w-[80%] h-[75px] rounded-2xl p-[5%] flex justify-center items-center">
                  {news.title}
                </div>
                <div className="border-t-2 shadow-xl border-b-2 text-[20px] w-[90%] h-[200px] rounded-2xl p-[5%] flex justify-center items-center">
                  {news.description}
                </div>
                <div className="flex justify-between w-[95%]">
                  {news.tags.map((tag, index) => (
                    <div
                      className="border-t-2 shadow-2xl border-b-2 text-[17px] w-[160px] h-[75px] rounded-2xl p-[5%] flex justify-center items-center"
                      key={index}
                    >
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] justify-between">
                  <div className="text-blue-200s">
                    {formatDate(new Date(news.date))} |{" "}
                    {formatTime(new Date(news.date))}
                  </div>
                  <div>{news.author}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div>Copyright @something</div>
    </div>
  );
};

export default page;
