import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layouts from "./component/Layout/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/skills", element: <Home></Home> },
      { path: "/projects", element: <Home></Home> },
      { path: "/contactme", element: <Home></Home> },
    ],
  },
]);

export default router;
