const mongoose = require("mongoose");
mongoose
 .connect(process.env.DATABASE_URL)
 .then(() => {
  console.log(" connect to the DATABASE");
 })
 .catch(e => {
  console.log(e);
 });