const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
 username: {
  type: String,
  required: true,
  unique: true
 },
 password: {
  type: String,
  required: true
 },
 email: {
  type: String,
  required: true,
  unique: true
 }
});
const registerModel = mongoose.model('users-model', userSchema)

module.exports=registerModel