import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl">Get In Touch</h3>
        <div>
          <a href="https://github.com/jaka-mursidm" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://websitepribadi.com" target="_blank">
            <i class="fas fa-globe"></i>
          </a>
          <a href="mailto:email@domain.com">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
        <p className="text-xs">
          &copy; 2025 Jaka Mursid M. - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
