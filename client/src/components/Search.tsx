import React, { useState, useEffect } from "react";
import { fetchCoins } from "@/function";
import { CryptoCurrency } from "@/types";

const CryptoSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<CryptoCurrency[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async () => {
    try {
      const { coins, isError, isLoading } = await fetchCoins();
      const data: CryptoCurrency[] = coins;
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={fetchData}>Пошук</button>

      <ul>
        {searchResults.map((crypto) => (
          <li key={crypto.id}>{crypto.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoSearch;
