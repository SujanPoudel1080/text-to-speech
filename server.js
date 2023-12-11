import express from "express";

import "dotenv/config";
import textRouter from "./routes/textRoute.js";

const app = express();

app.listen(9000, () => {
  console.log("server running at port 9000");
});
// const url = "https://kathmandupost.com/karnali-province/2023/11/23";
// const fetchData = async (url) => {
//   const { data } = await axios.get(url);
//   const $ = cheerio.load(data);
//   const newsItem = $(".story-section");
//   console.log(newsItem);

// };

// fetchData(url);

app.use("/api/text", textRouter);
