
import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
const App = () => {
 
  return (
    <>
      <Navbar/>
      <Hero title ='Semua lowongan ada disini' subtitle='Jelajahi perusahaan dan menjadi profesional'/>
      <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae illum debitis, aperiam inventore totam vero placeat officia. Maxime sapiente magnam quidem libero repellendus nemo fugiat tempora nobis, natus quo.</p>
      </Card>
    </>
  
  );
}

export default App