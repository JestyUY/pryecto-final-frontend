import "./App.css";
import ContextualMusic from "./components/ContextualMusic";
import React, { useEffect, useState } from "react"

import CreateAccountSecond from "./CreateAccountSecond";

function App() {
  return (
    <div className="w-screen h-screen max-w-md max-h-min m-auto relative">
      <CreateAccountSecond />
    </div>
  );
}

export default App;
