import mongoose, { Schema, model } from "mongoose";

const RoleSchema = Schema({
  value: { type: String, unique: true, default: "USER" },
});
const Roles = model("Role", RoleSchema);

export default Roles;
