import React from "react";
const Hero = ({ title, subtitle }) => {
  return (
    <>
      <div className="min-h-80 bg-gradient-to-l from-blue-400 to-blue-800 text-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
