import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-blue-400 to-blue-800 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between text-white font-medium">
          <Link to="/">
            <img src="" alt="" />
            Belajar React
          </Link>
          <div>
            <Link to="/" className="nav-link duration-75">
              Beranda
            </Link>
            <Link to="/lowongan" className="nav-link ml-4 duration-75">
              Lowongan
            </Link>
            <Link to="/perusahaan" className="nav-link mx-4 duration-75">
              Perusahaan
            </Link>
            <Link to="/tambah-pekerjaan" className="nav-link duration-75">
              Tambah pekerjaan
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
