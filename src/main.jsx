import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import HomePage from "./homepage";
import "./App.css";
import HomePage from "./homepage";

import CreateAccountSecond from "./CreateAccountSecond";
import LoginPage from "./Login";
import MainMenu from "./MainMenu";
import SearchMenu from "./SearchMenu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <CreateAccountSecond />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/menu",
    element: <MainMenu />,
  },
  { path: "/search", element: <SearchMenu /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
