import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-2xl flex gap-2 justify-center mb-3">
            <a
              href="https://github.com/jaka-mursidm"
              className="group/icon "
              target="_blank"
              title="Github"
            >
              <i class="fa-brands fa-github ease-out duration-100 group-hover/icon:scale-110"></i>
            </a>
            <a
              href="https://www.instagram.com/jaka.mursidm/"
              title="Instagram"
              className="group/icon"
              target="_blank"
            >
              <i class="fa-brands fa-instagram ease-out duration-100 group-hover/icon:scale-110"></i>
            </a>
            <a
              href="mailto:jaka.mursidm@gmail.com"
              className="group/icon"
              title="Gmail"
            >
              <i class="fa-solid fa-envelope ease-out duration-100 group-hover/icon:scale-110"></i>
            </a>
          </div>
          <p className="text-xs">
            &copy; 2025 Jaka Mursid M. - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
