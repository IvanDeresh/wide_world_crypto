"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { CryptoCurrency, User, INews } from "@/types";

export function fetchCoins() {
  const [coins, setCoins] = useState<CryptoCurrency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "https://openapiv1.coinstats.app/coins",
          method: "GET",
          headers: {
            Accept: "application/json",
            "X-API-KEY": "ZWoxZHLf8EuIUCJTf995TQVIfE0hFPzBRkzGsD4n1Aw=",
          },
        });
        setCoins(response.data.result);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Corrected to false
      }
    };

    fetchData();
  }, []);

  return { coins, isError, isLoading };
}

export function fetchNews() {
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "http://localhost:3003/api/news",
          method: "GET",
        });
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return news;
}
