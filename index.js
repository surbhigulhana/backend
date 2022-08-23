const express = require("express");
const app = express();
const path=require("path");
const cors = require("cors");
require("./db")
const bodyParser =require("body-parser")
app.use(cors());
app.use(express.json());
  
const signup =require("./Router/SignupAPI");
app.use("/", signup);

app.listen(4201);
console.log("Server Run On 4201...")