import User from "../model/User.js";
import Token from "./Token.js";
import bcrypt from "bcrypt";
import Roles from "../model/Roles.js";
import UserDto from "../dtos/userDtos.js";
import { Error } from "mongoose";
class UserService {
  async registration(username, password, email) {
    try {
      const candidate = await User.findOne({ email });
      if (candidate) {
        throw new Error("User already exists");
      }

      const userRole = await Roles.findOne({ value: "USER" });
      const hashPassword = bcrypt.hashSync(password, 7);

      const user = await User.create({
        username,
        email,
        password: hashPassword,
        roles: userRole.value,
      });

      const userDto = new UserDto(user);
      const tokens = Token.generateToken({ ...userDto });

      await Token.saveToken(userDto.id, tokens.refreshToken);

      return {
        tokens,
        user: userDto,
      };
    } catch (error) {
      throw new Error("Registration error: " + error.message);
    }
  }
  async login(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }
    const validPasword = bcrypt.compareSync(password, user.password);
    if (!validPasword) {
      throw new Error("Invalid password");
    }
    const userDto = new UserDto(user);
    const tokens = Token.generateToken({ ...userDto });

    await Token.saveToken(userDto.id, tokens.refreshToken);
    return {
      tokens,
      user: userDto,
    };
  }
  async logout(token) {
    const removedToken = await Token.removeToken(token);
    return removedToken;
  }
  async refresh(refreshToken) {
    if (!refreshToken) {
      throw new Error("User unauthorized");
    }
    const userData = Token.validateRefreshToken(refreshToken);
    const tokenFromDB = await Token.findToken(refreshToken);
    if (!userData || tokenFromDB) {
      throw new Error("User unauthorized");
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = Token.generateToken({ ...userDto });

    await Token.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
