import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import CompanyList from "../components/CompanyList";
import JobList from "../components/JobList";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Semua lowongan ada disini"
        subtitle="Jelajahi perusahaan dan menjadi profesional"
      />
      <CompanyList />
      <JobList />
      <Footer />
    </>
  );
};

export default HomePage;
