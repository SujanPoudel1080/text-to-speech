import * as say from "say";
import fs from "fs";
const tts = new say.Say("darwin" || "win32" || "linux");

export const toSpeech = (text) => {
  return tts.speak(text, "Victoria", 2, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(text);
    console.log("successfully converted text to speech");
  });
};

export const exportAudio = (text) => {
  return tts.export(text, "Alex", 1, "./audio.wav", (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(text);
    console.log("Text has been saved to audio.wav.");
  });
};

export const stopSpeech = () => {
  tts.stop();
};
