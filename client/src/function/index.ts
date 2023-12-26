"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { CryptoCurrency } from "@/types";

export function fetchData({ url }: { url: string }) {
  const [coins, setCoins] = useState<CryptoCurrency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: url,
          method: "GET",
          headers: {
            Accept: "application/json",
            "X-API-KEY": "ZWoxZHLf8EuIUCJTf995TQVIfE0hFPzBRkzGsD4n1Aw=",
          },
        });
        setCoins(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return coins;
}
