const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const moviesRouter = require("./routes/moviesRouter");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use( moviesRouter);  

module.exports = app;
