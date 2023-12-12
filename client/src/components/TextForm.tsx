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
  return (
    <Form method="post" className="form">
      <label htmlFor="text" className="form-element">Enter text to turn to speech</label>
      <input
        id="text"
        name="text"
        type="text"
        className="form-element"
        placeholder="enter text to turn to speech"
      />
      <button type="submit" className="btn">TO TEXT</button>
    </Form>
  );
};

export default TextForm;
