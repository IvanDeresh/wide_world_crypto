import mongoose, { Schema, model } from "mongoose";

const UserSchema = Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String },
  roles: [{ type: String, ref: "Role" }],
});
const User = model("User", UserSchema);

export default User;
