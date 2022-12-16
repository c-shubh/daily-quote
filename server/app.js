require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const { Schema } = mongoose;
mongoose.connect(process.env.MONGODB_CONNSTRING);

const monkQuoteSchema = new Schema({
  date: String,
  topic: String,
  text: String,
});
const MonkQuote = mongoose.model("MonkQuote", monkQuoteSchema);

const app = express();
app.use(cors());
app.use(morgan("combined"));

app.get("/monk-quote/:month/:day", async (req, res) => {
  const date = dayjs(`${req.params.month} ${req.params.day}`);
  if (!date.isValid()) {
    res.status(404).send("Invalid date.");
  }
  const formattedDate = date.format("MMMM D");

  data = await MonkQuote.findOne({ date: formattedDate });

  res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
});
