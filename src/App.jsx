
import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import CompanyList from './components/CompanyList';

const App = () => {
 
  return (
    <>
      <Navbar/>
      <Hero title ='Semua lowongan ada disini' subtitle='Jelajahi perusahaan dan menjadi profesional'/>
      <CompanyList/>
    </>
  
  );
}

export default App