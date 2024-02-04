import $api from "@/http";
import { AuthResponse } from "@/types";
import { AxiosResponse } from "axios";
export default class AuService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { username, password });
  }
  static async registration(
    username: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", {
      username,
      email,
      password,
    });
  }
  static async logout(): Promise<void> {
    $api.post<AuthResponse>("/logout");
  }
}
