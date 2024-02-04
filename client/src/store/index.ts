import AuthService from "@/function/AuthService";
import { IUser } from "@/types";
import { makeAutoObservable } from "mobx";
export default class Store {
  user = {} as IUser;
  isAuth = false;
  constructor() {
    makeAutoObservable(this);
  }
  setAuth(bool: boolean) {
    this.isAuth = bool;
  }
  setUser(user: IUser) {
    this.user = user;
  }
  async login(username: string, password: string) {
    try {
      const response = await AuthService.login(username, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      console.log(localStorage.getItem("token"));
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err: any) {
      console.error(err.response?.data?.message);
    }
  }
  async registration(username: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(
        email,
        username,
        password
      );
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err: any) {
      console.error(err.response?.data?.message);
    }
  }
  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (err: any) {
      console.error(err.response?.data?.message);
    }
  }
}
