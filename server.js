import express from "express";
import say from "say";

const app = express();

app.listen(9000, () => {
  console.log("server running at port 9000");
});

const text = "hello!";

const tts = new say.Say("darwin");

tts.speak(text, "Alex", 1, (err) => {
  if (err) {
    return console.error(err);
  }
//   const list = tts.getInstalledVoices();
console.log("successfully converted text to speech");

  process.exit();
});
