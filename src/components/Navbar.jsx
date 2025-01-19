import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-l from-blue-400 to-blue-800 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between text-white font-medium">
          <Link to="/">
            <img src="" alt="" />
            Belajar React
          </Link>
          <div>
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/lowongan"
              className={`nav-link ${
                location.pathname === "/lowongan" ? "active" : ""
              } ml-4`}
            >
              Lowongan
            </Link>
            <Link
              to="/perusahaan"
              className={`nav-link ${
                location.pathname === "/perusahaan" ? "active" : ""
              } mx-4`}
            >
              Perusahaan
            </Link>
            <Link
              to="/tambah-pekerjaan"
              className={`nav-link ${
                location.pathname === "/tambah-pekerjaan" ? "active" : ""
              }`}
            >
              Tambah pekerjaan
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
