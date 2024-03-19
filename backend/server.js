const express = require("express");
const cors = require("cors")
const register = require("./routes/registerRoute.js");
require("dotenv").config();
require('./connect.js')
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', register)
app.get("/", (req, res) => {
 res.send({ name: "manish", age: 23, school: "sunShine" });
});


app.listen(3000, () => console.log("runnig on port 3000"));
