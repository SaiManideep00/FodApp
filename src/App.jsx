import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Home";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
