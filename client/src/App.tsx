import { Form } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <Form>
      <label htmlFor="tts">Enter text to turn to speech</label>
      <input
        id="tts"
        type="text"
        className="form-input"
        placeholder="enter text to turn to speech"
      />
    </Form>
  );
};

export default App;
