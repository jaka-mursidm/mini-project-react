import React from "react";
import { Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CompanyList from "./components/CompanyList";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Hero
        title="Semua lowongan ada disini"
        subtitle="Jelajahi perusahaan dan menjadi profesional"
      />
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />
      
      <CompanyList />
      <JobList />
      <Footer /> */}
    </>
  );
};

export default App;
