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
    <>
      {/* HEADER FIXE */}
      <header className="fixed top-0 left-0 right-0 z-1000 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="w-42">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Navigation Desktop */}
          <ul className="hidden md:flex gap-6 text-gray-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton Burger */}
          <button
            className="md:hidden text-white z-1001 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </nav>
      </header>

      {/* MENU MOBILE (Sorti du header) */}
      <div
        className={`fixed inset-0 z-999 bg-gray-950 flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden mt-10 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-3xl font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <div className="flex gap-8 mt-4">
          <a href="https://github.com/Abdul-le-dev" className="text-white">
            <FaGithub size={32} />
          </a>
          <a href="#" className="text-white">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:abdulledev@gmail.com" className="text-white">
            <SiGmail size={32} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
