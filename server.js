import express from "express";

import "dotenv/config";
import textRouter from "./routes/textRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001" }));

// const url = "https://kathmandupost.com/karnali-province/2023/11/23";
// const fetchData = async (url) => {
//   const { data } = await axios.get(url);
//   const $ = cheerio.load(data);
//   const newsItem = $(".story-section");
//   console.log(newsItem);

// };

// fetchData(url);
app.get("/api/test", (req, res) => {
  res.json({ msg: "hello!" });
});

app.use("/api/text", textRouter);

app.listen(8000, () => {
  console.log("server running at port 8000");
});

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
