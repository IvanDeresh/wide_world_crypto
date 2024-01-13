"use client";
import { fetchNews } from "@/function";
import React, { useState } from "react";
import Image from "next/image";
import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import AddNews from "@/components/AddNews";

const Page = () => {
  const news = fetchNews();
  const [query, setQuery] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const [page, setPage] = useState(1);

  const handlePageChange = (event: any, value: any) => {
    setPage(value);
    setQuery((value - 1) * itemsPerPage);
  };

  return (
    <div className="h-full h-min-screen max-container relative my-[200px] flex text-[20px] flex-col justify-center items-center">
      <div>
        <div className="text-[40px] mb-[100px] font-montserrat">
          News Wide World
        </div>
        <button
          onClick={() => setIsClicked(!isClicked)}
          className="w-[100px] hover:shadow-3xl hover:shadow-white hover:translate-y-[-2px] bg-[#abbbd6] cursor-pointer h-[100px] absolute text-[60px] shadow-2xl border-2 rounded-2xl top-[-20px] right-[15%] flex justify-center items-center max-xl:right-[5%]"
        >
          +
        </button>
        <div className="mb-[50px] ml-[50px]">
          <Stack spacing={2}>
            {!!totalPages && (
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                showFirstButton
                showLastButton
                sx={{
                  marginY: 3,
                  marginX: "auto",
                }}
                renderItem={(item: any) => (
                  <PaginationItem
                    component={Link}
                    to={`/?page=${item.page}`}
                    {...item}
                  />
                )}
              />
            )}
          </Stack>
        </div>
      </div>
      {isClicked ? (
        <div className="absolute top-[150px] border-t-2 shadow-2xl border-b-2 rounded-3xl bg-[#abbbd6]">
          <AddNews />
          <button
            className="absolute right-10 top-8 "
            onClick={() => setIsClicked(false)}
          >
            <CloseIcon className="text-[50px] text-white" />
          </button>
        </div>
      ) : null}
      <div className="w-full flex flex-col justify-center items-center ">
        {news.map((newsItem) => (
          <div key={newsItem.id}>
            {newsItem.id >= query && newsItem.id <= query + itemsPerPage ? (
              <div
                className="w-[100%] h-[150px] justify-center flex items-center"
                key={newsItem.id}
              >
                <Link
                  href={`/pages/news/${newsItem.id}`}
                  className="w-[70vw] items-center h-[120px] flex justify-around rounded-2xl border-2"
                >
                  <Image
                    src={newsItem.image}
                    alt="image"
                    width={40}
                    height={40}
                    className="w-[70px] h-[70px] rounded-xl"
                  />
                  <div className="text-white text-[20px] max-xl:text-[15px]">
                    {newsItem.title}
                  </div>
                  <div className="text-white text-[20px] max-xl:text-[15px]">
                    {newsItem.author}
                  </div>
                </Link>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div>Copyrigh.authoruthor@something</div>
    </div>
  );
};

export default Page;
