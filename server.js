import express from "express";
import say from "say";

const app = express();

app.listen(9000, () => {
  console.log("server running at port 9000");
});

const text = "I live in Nepal";

const tts = new say.Say("darwin");

tts.speak(text, "Alex", 1, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("text to speech complete");
});
