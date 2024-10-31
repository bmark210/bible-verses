import { createBrowserRouter, Navigate } from "react-router-dom";
import Verses from "./pages/verses/Verses";
import Contexts from "./pages/contexts/Contexts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/verses" />,
  },
  {
    path: "/verses",
    element: <Verses />,
  },
  {
    path: "/contexts",
    element: <Contexts />,
  },
  {
    path: "*",
    element: <Navigate to="/verses" />,
  },
]);
