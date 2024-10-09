require("dotenv").config();
const indexRouter = require("./routes/indexRouter");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server started at Port:", PORT);
});

app.use("/", indexRouter);
