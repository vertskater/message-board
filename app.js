const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 3000;

//init view Engine EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//Set Assets Path to public
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));
//init Form data use
app.use(express.urlencoded({ extended: true }));

//set Index Route
const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

app.listen(PORT);
