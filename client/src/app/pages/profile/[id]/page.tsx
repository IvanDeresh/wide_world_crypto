import React from "react";
import type { Props } from "@/types";
const page = ({ params: { id } }: Props) => {
  return (
    <div className="text-[50px] h-screen flex justify-center items-center">
      <div>{id}</div>
    </div>
  );
};

export default page;
