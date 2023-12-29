const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"))

const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI, () => {
//     console.log("MongoDB connected!");
// });


// mongoose.connect(process.env.MONGO_URI, () => {
//         console.log("MongoDB connected!");
//     }).then((success) => app.listen(500,() => {
//         console.log(`Server started at port: ${PORT}`);
//     })).catch((err) => console.log(err.message));

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected Successfully")).catch((err) => {console.error(err); });


app.use(UploadRoute)

app.listen(PORT,() => {
    console.log(`Server started at port: ${PORT}`);
});