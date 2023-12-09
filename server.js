import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";
import * as say from "say";
import dotenv from 'dotenv';

const app = express();
app.use(dotenv/config);
// const sec = <section class='story-section'><p></p></section>;

app.listen(9000, () => {
  console.log("server running at port 9000");
});
const url = "https://kathmandupost.com/karnali-province/2023/11/23";
const fetchData = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const newsItem = $(".story-section");
  console.log(newsItem);
  
};

fetchData(url);

const text = "Messi is coming";

const tts = new say.Say("darwin");

tts.speak(text, "Alex", 1, (err) => {
  if (err) {
    console.error(err);
    process.exit();
  }
  //   const list = tts.getInstalledVoices();
  console.log("successfully converted text to speech");

  process.exit();
});
