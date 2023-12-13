import { toSpeech, exportAudio, stopSpeech } from "../utils/say.js";

export const newText = async (req, res) => {
  const { text } = await req.body;
  console.log(text);
  toSpeech(text);

  res.status(200);
};

export const audioExport = async (req, res) => {
  const { text } = await req.body;

  exportAudio(text);
  res.status(200).json({ msg: "task successful", text: text });
};

export const stop = (req, res) => {
  stopSpeech();
  res.status(200).json({ message: "stopped speech" });
};
