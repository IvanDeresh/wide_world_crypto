import React from "react";
import { fetchNews } from "@/function";
import Link from "next/link";

const NewsWindow = () => {
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

  const data = fetchNews();
  return (
    <div className="text-black mx-5 flex justify-center items-center flex-col  gap-5">
      {data.map((news) => (
        <div key={news.id} className="">
          {news.id <= 3 && (
            <div className="border-2 h-[70px] w-[500px] p-[10px] rounded-2xl">
              <Link href={`/pages/news/${news.id}`} className="font-bold">
                {news.title}
              </Link>
              <div className="text-blue-200s">
                {formatDate(new Date(news.date))} |{" "}
                {formatTime(new Date(news.date))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsWindow;
