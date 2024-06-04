const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  deadline: Date,
});
const UserModel = mongoose.model("tasks", UserSchema);
module.exports = UserModel;
