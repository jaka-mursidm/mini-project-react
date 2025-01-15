import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Semua lowongan ada disini"
        subtitle="Jelajahi perusahaan dan menjadi profesional"
      />
    </>
  );
};

export default App;
