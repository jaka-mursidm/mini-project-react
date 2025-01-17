import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Semua lowongan ada disini"
        subtitle="Jelajahi perusahaan dan menjadi profesional"
      />
      <JobList />
      <Footer />
    </>
  );
};

export default App;
