import { toSpeech } from "../utils/say.js";

export const newText = async (req, res) => {
  const { text } = req.body;
  //   const voices = say.getInstalledVoices();
  //   console.log(voices);
  toSpeech(text);
  res.status(200);
};
