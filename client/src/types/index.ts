export type ButtonType = {
  lebel: string;
};
export type CryptoCurrency = {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  redditUrl: string;
  websiteUrl: string;
  twitterUrl: string;
  explorers: string[];
};
export interface INews {
  date: Date;
  title: string;
  description: string;
  image: string;
  author: string;
  category: string;
  id: number;
  tags: string[];
}
export type Props = {
  params: {
    id: string;
  };
};
export type User = {
  roles?: string[];
  username?: string;
  email?: string;
  password?: string;
};
export interface IUser {
  id: string;
  email: string;
  roles: string;
  username: string;
}
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
