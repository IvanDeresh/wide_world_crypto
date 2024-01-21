import React from "react";
import type { Props } from "@/types";
const page = ({ params: { id } }: Props) => {
  return (
    <div className="h-screen flex max-container justify-center items-center">
      {id}
    </div>
  );
};

export default page;
