import React from "react";

import Landing from "./components/Landing";
import Features from "./components/Features";
import Vote from "./components/Vote";
import { BobHorseman } from "./components/BobHorseman";
import { Roadmap } from "./components/Roadmap";
import Footer from "./components/Footer";
import { Developer } from "./components/Developer";
import { Guide } from "./components/Guide";

// app.js
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <Vote />
      <BobHorseman />
      <Features />
      <Roadmap />
      <Guide />
      <Developer />
      <Footer />
    </>
  );
};

export default App;
