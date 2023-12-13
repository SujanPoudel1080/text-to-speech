import { useState } from "react";
import { Form, ActionFunction } from "react-router-dom";
import server from "../utils/server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await server.post("/text", data);
    return null;
  } catch (error) {
    return error;
  }
};
const TextForm: React.FC = () => {
  const [text, setText] = useState("");

  const exportAudio = async (text: string) => {
    try {
      await server.post("/text/export", text);
    } catch (err) {
      console.log(err);
    }
  };

  const stop = async () => {
    try {
      await server.get("/text");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form method="post" className="form">
        <label htmlFor="text" className="form-element">
          Enter text to turn to speech
        </label>
        <input
          id="text"
          name="text"
          type="text"
          className="form-element"
          placeholder="enter text to turn to speech"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          TO SPEECH
        </button>
        <button
          type="button"
          onClick={() => {
            exportAudio(text);
          }}
          className="btn"
        >
          export
        </button>
        <button type="button" onClick={stop} className="btn">
          stop
        </button>
      </Form>
    </>
  );
};

export default TextForm;
