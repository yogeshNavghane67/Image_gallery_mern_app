const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI, () => {
//     console.log("MongoDB connected!");
// });


mongoose.connect(process.env.MONGO_URI, () => {
    console.log("MongoDB connected!");
}).then((success) => app.listen(5000)).catch((err) => console.log(err.message));

app.listen(PORT,() => {
    console.log(`Server started at port: ${PORT}`);
});