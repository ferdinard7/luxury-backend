const express = require("express");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors");

connectDb();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/propertyRoute"));
// app.use("/api", require("./routes/personRoute"));



app.listen(PORT, () => {
    console.log(`server is up nd running on port ${PORT}`)
})