import React from "react";

import Landing from "./components/Landing";
import Stages from "./components/Stages";
import Features from "./components/Features";
import Vote from "./components/Vote";
import { BobHorseman } from "./components/BobHorseman";
import { Roadmap } from "./components/Roadmap";
import Footer from "./components/Footer";
import { Team } from "./components/Team";
import { Guide } from "./components/Guide";

// app.js
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <Landing />
      <Stages />
      <Vote />
      <BobHorseman />
      <Features />
      <Roadmap />
      <Guide />
      <Team />
      <Footer />
    </>
  );
};

export default App;
