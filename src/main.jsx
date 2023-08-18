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
import ContextualMusic from "./components/ContextualMusic";
import MusicalCupid from "./components/MusicalCupid";
import UserProfile from "./components/profile";
import DetailedPlaylist from "./DetailedPlaylist";

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
  {
    path: "/search",
    element: <SearchMenu />,
  },
  {
    path: "/contextualmusic",
    element: <ContextualMusic />,
  },
  {
    path: "/musicalcupid",
    element: <MusicalCupid />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  { path: "/detailedplaylist", element: <DetailedPlaylist /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>
);
