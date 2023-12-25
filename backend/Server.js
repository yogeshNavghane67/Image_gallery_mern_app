const express = require("express");
const cors = require("cors");
const mongoose =require("mongoose");
require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`Server started at port: ${PORT}`);
})