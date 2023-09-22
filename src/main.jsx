import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main.jsx";
import Home from "./components/Home";
import About from "./components/About/About";
import WhatIDo from "./components/WhatIDo";
import MySkills from "./components/MySkills";
import ContactMe from "./components/Contact/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/whatIDo",
        element: <WhatIDo />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
      {
        path: "/skills",
        element: <MySkills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
