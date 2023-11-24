import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
// import say from "say";

const app = express();
// const sec = <section class='story-section'><p></p></section>;

app.listen(9000, () => {
  console.log("server running at port 9000");
});
const url = "https://kathmandupost.com/karnali-province/2023/11/23";
const fetchData = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const newsItem = $("section").find('p');
  console.log(newsItem);
};

fetchData(url);

// const text = "sumarga is a good boy";

// const tts = new say.Say("darwin");

// tts.speak(text, "Rishi", 1, (err) => {
//   if (err) {
//     console.error(err);
//     process.exit();
//   }
//   //   const list = tts.getInstalledVoices();
//   console.log("successfully converted text to speech");

//   process.exit();
// });
