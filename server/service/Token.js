import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Token from "../model/Token.js";
dotenv.config();
class TokenService {
  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }
  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.REFRESH_SECRET_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });
    return { accessToken, refreshToken };
  }
  async saveToken(userId, refreshToken) {
    const tokenData = await Token.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await Token.create({ userId: userId, refreshToken });
    return token;
  }
  async removeToken(token) {
    const tokenData = await Token.deleteOne({ token });
    return tokenData;
  }
}
export default new TokenService();
