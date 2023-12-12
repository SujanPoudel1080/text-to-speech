import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TextForm from "./components/TextForm";
import { action as textAction } from "./components/TextForm";

const routes = createBrowserRouter([
  {
    path: "/tts",
    element: <TextForm />,
    action: textAction,
  },
]);
// export const action = async ({ request: any }) => {};

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
