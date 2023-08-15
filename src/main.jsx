import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import HomePage from "./homepage";
import "./App.css";
import HomePage from "./homepage";

import CreateAccountSecond from "./CreateAccountSecond";
<<<<<<< HEAD
import LoginPage from "./Login";
import MainMenu from "./MainMenu";
import SearchMenu from "./SearchMenu";
=======
import ContextualMusic from "./components/ContextualMusic";
import MusicalCupid from "./components/MusicalCupid";



>>>>>>> b4655bc6eda163a4fd2d3b47115959675618d0b3
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
<<<<<<< HEAD
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/menu",
    element: <MainMenu />,
  },
  { path: "/search", element: <SearchMenu /> },
=======
    path: "/contextualmusic",
    element: <ContextualMusic />,
  },
  {
    path: "/musicalcupid",
    element: <MusicalCupid />,
  },
 
>>>>>>> b4655bc6eda163a4fd2d3b47115959675618d0b3
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
