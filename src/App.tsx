import React from "react";

import Landing from "./components/Landing";
import Features from "./components/Features";
import Vote from "./components/Vote";
import { Roadmap } from "./components/Roadmap";
import Footer from "./components/Footer";
import { Guide } from "./components/Guide";

// app.js
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <Vote />
      <Features />
      <Roadmap />
      <Guide />
      <Footer />
    </>
  );
};

export default App;
