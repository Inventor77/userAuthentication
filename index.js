const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Routes
const authRoute = require("./routes/authRoute");

const homeRoute = require("./routes/home")

dotenv.config();

// DB
mongoose.connect(
	process.env.MONGOOSE_CONNECT,
	{ useNewURLParser: true },
	() => {
		console.log("connected to db!");
	}
);

// Middleware
app.use(express.json());

// Route Middleware
app.use("/", authRoute);
app.use("/", homeRoute);

app.listen(8000, () => {
	console.log("up and running");
});
