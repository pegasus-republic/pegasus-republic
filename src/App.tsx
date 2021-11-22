import React from "react";

import Landing from "./components/Landing";
import Features from "./components/Features";
import Vote from "./components/Vote";

// app.js
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <Vote />
      <Features />
    </>
  );
};

export default App;
