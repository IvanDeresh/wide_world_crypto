import React from "react";
import type { ButtonType } from "@/types";
const Button = ({ lebel }: ButtonType) => {
  return (
    <button className="w-[150px] h-[50px] rounded-full bg-blue-600">
      {lebel}
    </button>
  );
};

export default Button;
