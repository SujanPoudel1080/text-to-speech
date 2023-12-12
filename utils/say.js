import * as say from "say";
const tts = new say.Say("darwin");

export const toSpeech = (text) => {
  return tts.speak(text, "Victoria", 1, (err) => {
    if (err) {
      console.error(err);
      //   process.exit();
    }
    console.log("successfully converted text to speech");

    // process.exit();
  });
};

