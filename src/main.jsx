import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import HomePage from "./homepage";
import "./App.css";
import HomePage from "./homepage";
import CreateAccount from "./CreateAccount";
import CreateAccountSecond from "./CreateAccountSecond";
import ContextualMusic from "./components/ContextualMusic";
import MusicalCupid from "./components/MusicalCupid";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <CreateAccount />,
  },
  {
    path: "/register/new",
    element: <CreateAccountSecond />,
  },
  {
    path: "/contextualmusic",
    element: <ContextualMusic />,
  },
  {
    path: "/musicalcupid",
    element: <MusicalCupid />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
