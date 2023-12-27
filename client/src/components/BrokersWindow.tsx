import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";
import Link from "next/link";
import { blackrock, interactive, trading212, vanguard } from "@/assets/img";
const BrokersWindow = () => {
  return (
    <div>
      <div className="w-full flex">
        <div className="flex p-5 flex-col gap-10 w-[full] justify-center">
          <Link
            target="_blank"
            href="https://www.blackrock.com/corporate/about-us"
          >
            <Image
              src={blackrock}
              alt="blackrock"
              className="border-2 w-[220px] h-[110px] rounded-2xl"
            />
            <div>BlackRock</div>
            <p className="flex text-yellow-400">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
            </p>
          </Link>

          <Link
            target="_blank"
            href="https://www.interactivebrokers.com/en/whyib/overview.php"
          >
            <Image
              src={interactive}
              alt="interactive"
              className="rounded-2xl w-[220px] h-[110px] border-2"
            />
            <div>IBKR</div>
            <p className="flex text-yellow-400">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-10 w-[full] justify-center">
          <Link target="_blank" href="https://www.trading212.com/pl/about-us">
            <Image
              src={trading212}
              alt="trading212"
              className=" border-2 w-[220px] h-[110px] rounded-2xl"
            />
            <div>Trading 212</div>
            <p className="flex text-yellow-400">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </p>
          </Link>
          <Link target="_blank" href="https://investor.vanguard.com/home">
            <Image
              src={vanguard}
              alt="vanguard"
              className="rounded-2xl w-[220px] h-[110px] border-2"
            />
            <div>Vanguard</div>
            <p className="flex  text-yellow-400">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarHalfIcon />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrokersWindow;
