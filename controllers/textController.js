import * as say from "say";
const tts = new say.Say("darwin");

export const newText = async (req, res) => {
  const { text } = req.body();
  tts.speak(text, "Alex", 1, (err) => {
    if (err) {
      console.error(err);
      process.exit();
    }
    console.log("successfully converted text to speech");

    process.exit();
  });

  res.status(200).json({ message: "text entered successfully", text: text });
};
