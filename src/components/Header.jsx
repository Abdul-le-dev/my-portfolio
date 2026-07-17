import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/ald-white.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "À propos", href: "#a-propos" },
    { name: "Compétences", href: "#competences" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projets" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-950/70 backdrop-blur-lg border-b border-white/20">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-50">
          <a href="/">
          <img src={logo} alt="Logo" className="h-auto cursor-pointer" />
          </a>
        </div>

        {/* Navigation Desktop */}
        <ul className="hidden md:flex gap-6 font-medium text-gray-400">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative py-2 group hover:text-white transition-colors"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Liens sociaux */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/Abdul-le-dev"
            target="_blank"
            className="text-gray-400 hover:text-white transition-transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/votre-profil"
            target="_blank"
            className="text-gray-400 hover:text-white transition-transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:abdulledev@gmail.com"
            className="text-gray-400 hover:text-white transition-transform hover:scale-110"
          >
            <SiGmail size={24} />
          </a>
        </div>

        {/* Bouton Burger Mobile */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </nav>

      {/* Menu Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-gray-950 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-bold text-white hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
